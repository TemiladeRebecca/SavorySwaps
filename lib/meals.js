//
import fs from 'node:fs';

import slugify from 'slugify';
import xss from 'xss';
import pool from './db';


export async function getMeals() {
    try {
      const { rows } = await pool.query('SELECT * FROM meals');
      return rows;
    } catch (error) {
      console.error('Error fetching meals:', error);
      throw new Error('Fetching meals failed');
    }
  }

  export async function getMeal(slug) {
    try {
      const { rows } = await pool.query('SELECT * FROM meals WHERE slug = $1', [slug]);
      return rows[0]; // Return the first match
    } catch (error) {
      console.error('Error fetching meal:', error);
      throw new Error('Fetching meal failed');
    }
  }

  export async function saveMeal(meal) {
    try {
      meal.slug = slugify(meal.title, { lower: true });
      meal.instructions = xss(meal.instructions);
  
      // Handle image upload
      const extension = meal.image.name.split('.').pop();
      const fileName = `${meal.slug}.${extension}`;
      const filePath = `public/images/${fileName}`;
      const bufferedImage = await meal.image.arrayBuffer();
      fs.writeFile(filePath, Buffer.from(bufferedImage));
  
      meal.image = `/images/${fileName}`;
  
      // Insert into PostgreSQL
      const query = `
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;
      const values = [
        meal.title,
        meal.summary,
        meal.instructions,
        meal.creator,
        meal.creator_email,
        meal.image,
        meal.slug,
      ];
      await pool.query(query, values);
    } catch (error) {
      console.error('Error saving meal:', error);
      throw new Error('Saving meal failed');
    }
  }
  

// const db = sql('meals.db');


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
