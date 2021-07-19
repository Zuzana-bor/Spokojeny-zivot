import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../db';

export const Recipe = () => {
  let { id } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const uklidPoSobe = db
      .collection('seznamReceptu')
      .onSnapshot((snapshot) => {
        setRecipes(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            console.log(data);

            return data;
          }),
        );
      });
    return uklidPoSobe;

    db.collection('seznamReceptu')
      .doc('SHkLFsU0TTBe1EMAVmlv')
      .collection('druh')
      .onSnapshot((snapshot) => {
        console.log('počet druhů:', snapshot.docs.lenght);
      });
  }, []);

  const relatedRecipes = recipes.filter((recipe) => {
    recipe.druh === {id};
  });

  return (
    <>
      <h1> {id} </h1>
      <div>
        <ul>
        {relatedRecipes.map((recipe) => {
          <li key={recipe.id}>
            {recipe.recept} (kategorie: {recipe.druh} )
          </li>;
        })}
        </ul>
      </div>
    </>
  );
};
