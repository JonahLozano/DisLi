import { Person } from "../entity/person";
import { UserRole } from "./UserRoles";

export const generateFakeUsers = async () => {
  const alice = Person.create({
    university_id: "0000-0000-0000-0001",
    email: "alice@alice.alice",
    first_name: "Alice",
    last_name: "Alison",
    phone_number: "555-555-5555",
    role: UserRole.FRESHMEN,
  });

  const bob = Person.create({
    university_id: "0000-0000-0000-0002",
    email: "bob@bob.bob",
    first_name: "Bob",
    last_name: "Bobson",
    phone_number: "444-444-4444",
    role: UserRole.ADMIN,
  });

  const charlie = Person.create({
    university_id: "0000-0000-0000-0003",
    email: "charlie@charlie.charlie",
    first_name: "Charlie",
    last_name: "Charlson",
    phone_number: "333-333-3333",
    role: UserRole.FACULTY,
  });

  try {
    await Person.insert(alice);
  } catch (err) {
    console.log("Alison already exists in db");
  }
  try {
    await Person.insert(bob);
  } catch (err) {
    console.log(`Bob already exists in db`);
  }
  try {
    await Person.insert(charlie);
  } catch (err) {
    console.log(`Charlie already exists in db`);
  }
};
