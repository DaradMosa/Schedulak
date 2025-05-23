
/**
 * Material Type Definitions - Core data structure for academic materials
 * 
 * This file defines:
 * - Interface for all material objects
 * - Type constraints for material properties
 * - Documentation for each property
 * - Used throughout the application for type safety
 */

/**
 * Material Interface - Defines the structure for academic materials
 * 
 * This interface is used throughout the application to ensure consistent
 * typing for all material objects (documents, presentations, spreadsheets,
 * timetables, etc.)
 * 
 * @property {number} id - Unique identifier for the material
 * @property {string} title - Title/name of the material
 * @property {"document" | "presentation" | "spreadsheet" | "timetable" | "other"} type - Type of material
 * @property {string} course - Associated course name
 * @property {string} uploadedDate - Date when the material was uploaded
 * @property {string} size - File size (formatted as string, e.g., "1.2 MB")
 * @property {string} downloadUrl - URL to download the material
 */
export interface Material {
  id: number;
  title: string;
  type: "document" | "presentation" | "spreadsheet" | "timetable" | "other";
  course: string;
  uploadedDate: string;
  size: string;
  downloadUrl: string;
}
