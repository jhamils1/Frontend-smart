import apiClient from "./axiosConfig";

// Obtener todos los backups
export const getBackups = async () => {
  try {
    const response = await apiClient.get("/api/backup/backups/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener backups:", error);
    throw error;
  }
};

// Obtener un backup específico
export const getBackupById = async (id) => {
  try {
    const response = await apiClient.get(`/api/backup/backups/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener backup:", error);
    throw error;
  }
};

// Crear un backup manual
export const createBackup = async (data) => {
  try {
    const response = await apiClient.post("/api/backup/backups/", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear backup:", error);
    throw error;
  }
};

// Restaurar un backup
export const restoreBackup = async (id) => {
  try {
    const response = await apiClient.post(`/api/backup/backups/${id}/restaurar/`);
    return response.data;
  } catch (error) {
    console.error("Error al restaurar backup:", error);
    throw error;
  }
};

// Ejecutar backup automático manualmente
export const ejecutarBackupAutomatico = async () => {
  try {
    const response = await apiClient.post("/api/backup/backups/ejecutar_automatico/");
    return response.data;
  } catch (error) {
    console.error("Error al ejecutar backup automático:", error);
    throw error;
  }
};

// Obtener estadísticas
export const getEstadisticas = async () => {
  try {
    const response = await apiClient.get("/api/backup/backups/estadisticas/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener estadísticas:", error);
    throw error;
  }
};

// Obtener tiempo hasta próximo backup automático
export const getProximoBackup = async () => {
  try {
    const response = await apiClient.get("/api/backup/backups/proximo_backup/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener próximo backup:", error);
    throw error;
  }
};

// Limpiar backups antiguos
export const limpiarBackupsAntiguos = async (dias = 30) => {
  try {
    const response = await apiClient.post("/api/backup/backups/limpiar_antiguos/", { dias });
    return response.data;
  } catch (error) {
    console.error("Error al limpiar backups:", error);
    throw error;
  }
};

// Obtener restauraciones
export const getRestauraciones = async () => {
  try {
    const response = await apiClient.get("/api/backup/restauraciones/");
    return response.data;
  } catch (error) {
    console.error("Error al obtener restauraciones:", error);
    throw error;
  }
};

