// utils/generateRandomPosts.ts
import { v4 as uuidv4 } from 'uuid';

export interface Post {
  id: string;
  title: string;
  content: string;
  likes: number;
  views: number;
  timePosted: string;
}

const titles = [
  "The Rise of AI in Everyday Life",
  "Exploring the Wonders of Space",
  "A Journey Through Time: Historical Landmarks",
  "The Future of Renewable Energy",
  "Understanding Quantum Computing",
  "The Art of Mindfulness and Meditation",
  "Discovering Hidden Gems in Literature",
  "The Evolution of Music Genres",
  "Innovations in Modern Medicine",
  "The Impact of Social Media on Society",
  "Culinary Adventures: World Cuisine",
  "Advancements in Virtual Reality",
  "Travel Tips for the Modern Explorer",
  "The Science Behind Climate Change",
  "Unraveling the Mysteries of the Deep Sea",
  "The Psychology of Human Behavior",
  "Architectural Marvels of the World",
  "The Role of Technology in Education",
  "The Importance of Mental Health Awareness",
  "The Benefits of Sustainable Living"
];

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`;

export const generateRandomPosts = (): Post[] => {
  return titles.map((title, index) => ({
    id: uuidv4(),
    title,
    content,
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
    timePosted: new Date(Date.now() - index * 3600000).toISOString(), // 1 hour apart
  }));
};
