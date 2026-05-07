import { Item } from '../types/item';
const itemsMock: Item[] = [
 { id: '1', title: 'Primer ítem', description: 'Elemento de ejemplo para la clase.' },
 { id: '2', title: 'Segundo ítem', description: 'Permite simular un listado simple.' },
];
export async function getItems(): Promise<Item[]> {
 return new Promise(resolve => {
 setTimeout(() => resolve(itemsMock), 400);
 });
}
export async function createItem(data: Omit<Item, 'id'>): Promise<Item> {
 return new Promise(resolve => {
 setTimeout(() => {
 resolve({ id: Date.now().toString(), ...data });
 }, 300);
 });
}