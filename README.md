![logo](https://github.com/KristianUSN/techstore/blob/master/public/logo.png?raw=true)
# [THE FLASKEHALS](https://theflaskehals.herokuapp.com)
Bachelorprosjekt av Kristian og Mikael. Klikk tittelen for å besøke nettsiden ☝️

## Beskrivelse
Nettbutikk som selger datakomponenter, med en funksjon som sier ifra om det er noen flaskehalser/ubalanse i komponentene kunden legger i handlekurven sin. Skrevet i React/JS 💻

## React – info
### React Hooks
Når en komponent trenger å ta vare på og endre verdier, må det brukes state. State-manipulering er mest effektivt ved å broke såkalte *hooks*. Der du ikke trenger mer kan du bruke Reacts egen `useState` (eventuelt `useReducer` osv), men det kan ofte være lurt å lage sin egen hook.
#### Nyttige ressurser om hooks
* https://reactjs.org/docs/hooks-reference.html
* https://reactjs.org/docs/hooks-overview.html
* https://reactjs.org/docs/hooks-custom.html

(Legg gjerne til mer)

### React Context
Context brukes for å dele data/verdier mellom flere komponenter. Det gjøres ved at du oppretter en "provider", og definerer "consumers" for denne.
```reactjs
<App>
    <Header />
    <Main>
        <CurrentOffersProvider>
            <MainPage />
        </CurrentOffersProvider>
        <About />
    </Main>
    <Footer />
</App>
```
I eksempelet over er `CurrentOffersProvider` en Context Provider. Alle dens "barn" vil her automatisk "consume" contexten, som her er komponenten `MainPage` og alle dens barn, osv. `Header`, `About` og `Footer` vil ikke ha tilgang til dataene til `CurrentOffersProvider`. Fordelen her er at vi kan ha global state kun for de komponentene som trenger det, og vi slipper å sende props og funksjoner nedover i komponenttrær som fort kan bli veldig kronglete. 

Context kan inneholde hooks, funksjoner, metoder, variabler osv

!!!*Context er bare nødvendig om du vet at flere komponenter vil få bruk for de samme dataene og funksjonene. Ofte er det nok med å bare ha en lokal state i komponenten*!!!

#### Nyttige ressurser om context
* https://reactjs.org/docs/context.html
* https://kentcdodds.com/blog/how-to-use-react-context-effectively

(Legg gjerne til mer)

### Annet

#### Misc ressurser
* [Application state management with react](https://kentcdodds.com/blog/application-state-management-with-react)
* [Using Composition in React to Avoid "Prop Drilling"](https://www.youtube.com/watch?v=3XaXKiXtNjw)(Youtube)