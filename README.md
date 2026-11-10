# Tableau des départs de bus

Mini-projet React guidé : Composants, JSX, props, state, événements et lifting state.

## Démarrage rapide
- Installation des dépendances : `npm install`
- Lancement en développement : `npm run dev`
- Build de production : `npm run build`

## Concepts React mobilisés
- **Composants & JSX** : découpage modulaire en composants fonctionnels réutilisables.
- **Props & Flux de données descendant** : transmission des données depuis `App` vers les composants enfants.
- **Listes & clés stables** : affichage avec `.map()` et assignation d'une `key={departure.id}` stable et unique.
- **État local (`useState`) & Données dérivées** : gestion du filtre et de la sélection, calcul de `visibleDepartures` au rendu sans duplication d'état.
- **Lifting State & Callbacks remontants** : centralisation des états (`departures`, `filter`, `selectedId`) dans `App` pour synchroniser la liste, le filtre, le compteur et le panneau de détail.

## Caractère local de la simulation
L'application fonctionne entièrement en mémoire dans le navigateur. Les changements d'état (bascule entre « Ponctuel » et « Retard ») sont simulés localement sans appel API ni persistance backend.

## Arborescence des composants
- `App` (états : `departures`, `filter`, `selectedId`)
  - `Header` (prop : `total`)
  - `FilterBar` (props : `filter`, `onChange`)
  - `DepartureList` (props : `departures`, `selectedId`, `onSelect`)
    - `DepartureCard` x N (props : `departure`, `selected`, `onSelect`)
  - `DepartureDetails` (props : `selectedDeparture`, `selectionHidden`, `onToggleStatus`)
