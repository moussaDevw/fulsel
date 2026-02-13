import { Project } from "@/data/projects";

const API_URL = "https://management.fulserproperties.com"

const DEFAULT_RESIDENCE_IMAGE = "/assets/images/img9.jpg";

function mapResidence(item: any): Project {
    // Transform gallery categories if they exist
    const gallery: Record<string, string[]> = {};
    if (item.residence_gallery_categories && item.residence_gallery_categories.length > 0) {
        item.residence_gallery_categories.forEach((cat: any) => {
            gallery[cat.name] = cat.residence_gallery_images?.map((img: any) => img.url) || [];
        });
    } else if (item.residence_gallery_images && item.residence_gallery_images.length > 0) {
        // Fallback if no categories but images are present
        gallery["Général"] = item.residence_gallery_images.map((img: any) => img.url);
    }

    // Dynamic default image: try cover, then first image of first category, then global fallback
    let displayImage = item.image_cover;
    if (!displayImage) {
        const categories = Object.keys(gallery);
        if (categories.length > 0 && gallery[categories[0]].length > 0) {
            displayImage = gallery[categories[0]][0];
        }
    }

    return {
        id: Number(item.id),
        title: item.title,
        slug: item.slug,
        image: displayImage || DEFAULT_RESIDENCE_IMAGE,
        status: item.status === "en_cours" ? "En cours" : "A venir",
        startDate: item.startDate ? new Date(item.startDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) : "",
        endDate: item.endDate ? new Date(item.endDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) : "",
        description: item.residence_descriptions?.map((d: any) => d.paragraph) || [],
        location: item.location || "",
        apartmentTypes: item.residence_apartment_types?.map((t: any) => t.name) || [],
        amenities: item.residence_amenities?.map((a: any) => a.name) || [],
        brochureUrl: item.brochureUrl || "#",
        bannerImage: item.image_banner || null,
        plans: item.residence_plans?.map((p: any) => ({
            name: p.title,
            path: p.url,
            thumbnail: p.thumbnailUrl || DEFAULT_RESIDENCE_IMAGE
        })) || [],
        gallery: gallery
    };
}

export async function getPublicResidences(): Promise<Project[]> {
    const response = await fetch(`${API_URL}/api/public/residences`, {
        next: { revalidate: 60 } // Revalidate every minute
    } as any);

    if (!response.ok) {
        throw new Error("Failed to fetch residences");
    }

    const data = await response.json();
    return data.map(mapResidence);
}

export async function getResidenceBySlug(slug: string): Promise<Project | null> {
    const response = await fetch(`${API_URL}/api/residences/slug/${slug}`, {
        next: { revalidate: 60 }
    } as any);

    if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error("Failed to fetch residence");
    }

    const item = await response.json();
    return mapResidence(item);
}

export async function getPublicSettings(): Promise<Record<string, string>> {
    const response = await fetch(`${API_URL}/api/public/settings`, {
        next: { revalidate: 3600 } // Cache settings for an hour
    } as any);

    if (!response.ok) {
        throw new Error("Failed to fetch settings");
    }

    return response.json();
}
