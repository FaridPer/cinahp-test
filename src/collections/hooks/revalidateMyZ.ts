import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache';

export const revalidateMuseos: CollectionAfterChangeHook = async () => {
  revalidatePath('/museos-zonas'); // Cambia por la ruta real
};

export const revalidateMuseosDelete: CollectionAfterDeleteHook = async () => {
  revalidatePath('/museos-zonas'); // Cambia por la ruta real
}