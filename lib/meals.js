// 
import path from "path";
import betterSqlite3 from "better-sqlite3";

// Open SQLite database
function openDatabase() {
  const dbPath = path.resolve(process.cwd(), "public", "meals.db");
  return new betterSqlite3(dbPath);
}

// Fetch a single meal by slug
export function getMeal(slug) {
  const db = openDatabase();
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  db.close();
  return meal;
}

// Fetch all meals
export function getMeals() {
  const db = openDatabase();
  const meals = db.prepare("SELECT * FROM meals").all();
  db.close();
  return meals;
}


// import fs from 'node:fs';

// import slugify from 'slugify';
// import xss from 'xss';
// import sql from 'better-sqlite3'


// const db = sql('../public/meals.db');


// export async function getMeals() {
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // throw new error('Loading meals failed');
//     return db.prepare('SELECT * FROM meals').all();
// }

// export function getMeal(slug) {
//     return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
// }

// export async function saveMeal(meal) {
//     meal.slug = slugify(meal.title, {lower: true});
//     meal.instructions = xss(meal.instructions);

//     const extension = meal.image.name.split('.').pop();
//     const fileName = `${meal.slug}.${extension}`

//     const stream = fs.createWriteStream(`public/images/${fileName}`)
//     const bufferedImage = await meal.image.arrayBuffer();
   
//     stream.write(Buffer.from(bufferedImage), (error) => {
//         if (error) {
//             throw new Error('Saving image failed');
//         }
//     });

//     meal.image = `/images/${fileName}`
//     db.prepare(`
//         INSERT INTO meals
//         (title, summary, instructions, creator, creator_email, image, slug)
//         VALUES (
//         @title,
//         @summary,       
//         @instructions,
//         @creator,
//         @creator_email,
//         @image,
//         @slug
//         )
//         `).run(meal)
// }
