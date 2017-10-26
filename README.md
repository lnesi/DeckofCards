Deck Of cards Exercise



### INSTALL

```
> git clone https://github.com/lnesi/DeckofCards.git
> cd DeckofCards
> npm install
> npm start
```

Open: http://localhost:8080


### Test

```
> npm run test
```

```
  actions
    shuffleDeck
      ✓ has the correct type
      ✓ has the correct payload
    sortTable
      ✓ has the correct type
      ✓ has the correct payload
    drawCard
      ✓ has the correct type
      ✓ has the correct payload
    drawRandomCard
      ✓ has the correct type
      ✓ has the correct payload
    shuffleDeck
      ✓ has the correct type
      ✓ has the correct payload

  App
    ✓ renders something
    ✓ shows a deck
    ✓ shows a draw table

  DeckComponent
    ✓ has correct wrapper class: deck
    ✓ has card holder to render cards
    ✓ has a button to shuffle cards
    ✓ initialize with 52 cards
    ✓ has a draw form the top input and button
    ✓ has the ability to draw a given number of cards from the top (10)
    ✓ can draw card by clicking it (remove card from deck)
    ✓ has the ability to shuffle cards

  DrawTable Component
    ✓ has correct wrapper class: draw-table
    ✓ has card holder to render cards
    ✓ has a button to shuffle cards
    ✓ has the correct ammount of cards base on table state (4)
    ✓ has the ability to sort cards

  Cards Reducer
    ✓ handles action with uknown type
    ✓ handles action of type SHUFFLE_DECK


  28 passing (599ms)
```