import { posts } from './posts';
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
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
