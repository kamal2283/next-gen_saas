const { PrismaClient } = require("@prisma/client");
// Create a standalone Prisma client just for seeding
const seedPrisma = new PrismaClient();

// Don't import from your application code - create everything directly in this file

async function main() {
  // Clean the tables first to avoid duplicate entries during development
  console.log("Cleaning existing data...");
  await seedPrisma.user.deleteMany({});

  console.log("Seeding database with mock users...");
  await seedPrisma.user.createMany({
    data: [
      {
        clerkId: "clerk_002",
        name: "Bob Smith",
        email: "bob@example.com",
        profileImage: "https://example.com/avatar2.png",
        localGoogleId: "local_002",
        googleResourceId: "resource_002",
      },
      {
        clerkId: "clerk_003",
        name: "Charlie Davis",
        email: "charlie@example.com",
        profileImage: "https://example.com/avatar3.png",
        googleResourceId: "resource_003",
      },
      {
        clerkId: "clerk_004",
        email: "diana@example.com",
        localGoogleId: "local_004",
      },
      {
        clerkId: "clerk_005",
        name: "Eve Bennett",
        email: "eve@example.com",
        profileImage: "https://example.com/avatar5.png",
      },
    ],
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma client connection
    await seedPrisma.$disconnect();
  });
