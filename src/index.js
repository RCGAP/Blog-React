// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import Blog from 'src/components/Blog';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)

// le router doit être l'élément racine de l'application
// on encapsule le composant Blog dedans
// Router va passer l'object history au reste de l'application
const rootReactElement = (<Router><Blog /></Router>);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
