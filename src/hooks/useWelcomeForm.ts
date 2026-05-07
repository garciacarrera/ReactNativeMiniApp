import { useState } from 'react';
export function useWelcomeForm() {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 function reset() {
 setTitle('');
 setDescription('');
 }
 return {
 title,
 description,
 setTitle,
 setDescription,
 reset,
 };
}