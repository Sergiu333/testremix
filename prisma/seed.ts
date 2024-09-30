import { posts } from './posts'; // Asigură-te că acest fișier exportă un array de posturi
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	for (let post of posts) {
		await prisma.post.create({
			data: post,
		});
	}
}

main()
	.catch((e) => {
		console.error(e); // Folosește console.error pentru a evidenția erorile
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect(); // Asigură-te că se deconectează în mod corespunzător
	});
