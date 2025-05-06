"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2, Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectFormData {
  id?: number;
  title: string;
  slug: string;
  status: "En cours" | "A venir";
  startDate: string;
  endDate: string;
  image: string;
  description: string[];
  apartmentTypes: string[];
  amenities: string[];
  brochureUrl?: string;
  location?: string;
  gallery: Record<string, string[]>;
}

interface GallerySection {
  name: string;
  images: string[];
}

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectFormData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [gallerySections, setGallerySections] = useState<GallerySection[]>([]);
  const [newSectionName, setNewSectionName] = useState("");
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    slug: "",
    status: "A venir",
    startDate: "",
    endDate: "",
    image: "",
    description: [""],
    apartmentTypes: [""],
    amenities: [""],
    gallery: {},
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des projets");
      }
      const data = await response.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors du chargement des projets");
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ProjectFormData
  ) => {
    if (field === "title" && !isEditing) {
      const slug = e.target.value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData({ ...formData, title: e.target.value, slug });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: "description" | "apartmentTypes" | "amenities"
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value.split("\n").filter((item) => item.trim() !== ""),
    });
  };

  const handleAddGallerySection = () => {
    if (newSectionName.trim()) {
      setGallerySections([
        ...gallerySections,
        { name: newSectionName, images: [] },
      ]);
      setNewSectionName("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const response = await fetch("/api/projects", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          isEditing
            ? "Projet mis à jour avec succès"
            : "Projet créé avec succès"
        );
        setIsAddingProject(false);
        fetchProjects();
      }
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement du projet");
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
      try {
        const response = await fetch("/api/projects", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          toast.success("Projet supprimé avec succès");
          fetchProjects();
        }
      } catch (error) {
        toast.error("Erreur lors de la suppression du projet");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-[#B77625]" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1f3359]">
          Gestion des Projets
        </h1>
        <Button
          onClick={() => {
            setIsEditing(false);
            setFormData({
              title: "",
              slug: "",
              status: "A venir",
              startDate: "",
              endDate: "",
              image: "",
              description: [""],
              apartmentTypes: [""],
              amenities: [""],
              gallery: {},
            });
            setIsAddingProject(true);
          }}
          className="bg-[#B77625] hover:bg-[#965f1e]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Projet
        </Button>
      </div>

      {projects.length === 0 && !isLoading ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Aucun projet trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className={`absolute top-2 right-2 ${
                    project.status === "En cours"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.startDate} - {project.endDate}
                </p>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/projets/${project.slug}`)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Aperçu
                  </Button>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setFormData(project);
                        setIsEditing(true);
                        setIsAddingProject(true);
                      }}
                    >
                      <Pencil className="w-4 h-4 mr-2" />
                      Modifier
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => project.id && handleDelete(project.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Supprimer
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isAddingProject} onOpenChange={setIsAddingProject}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Modifier le Projet" : "Nouveau Projet"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre du Projet</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange(e, "title")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange(e, "slug")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Statut</Label>
                <select
                  id="status"
                  className="w-full p-2 border rounded"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "En cours" | "A venir",
                    })
                  }
                >
                  <option value="En cours">En cours</option>
                  <option value="A venir">À venir</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image Principale</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange(e, "image")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Date de début</Label>
                <Input
                  id="startDate"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange(e, "startDate")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Date de fin</Label>
                <Input
                  id="endDate"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange(e, "endDate")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Localisation (Google Maps URL)</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange(e, "location")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brochureUrl">URL de la Brochure</Label>
                <Input
                  id="brochureUrl"
                  value={formData.brochureUrl}
                  onChange={(e) => handleInputChange(e, "brochureUrl")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description (une ligne par paragraphe)
              </Label>
              <Textarea
                id="description"
                value={formData.description.join("\n")}
                onChange={(e) => handleArrayInputChange(e, "description")}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apartmentTypes">
                Types d'Appartements (un par ligne)
              </Label>
              <Textarea
                id="apartmentTypes"
                value={formData.apartmentTypes.join("\n")}
                onChange={(e) => handleArrayInputChange(e, "apartmentTypes")}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amenities">Aménagements (un par ligne)</Label>
              <Textarea
                id="amenities"
                value={formData.amenities.join("\n")}
                onChange={(e) => handleArrayInputChange(e, "amenities")}
                rows={3}
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddingProject(false)}
              >
                Annuler
              </Button>
              <Button type="submit" className="bg-[#B77625] hover:bg-[#965f1e]">
                Enregistrer
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
