<template>
    <div class="container">
      <app-progress :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on a Quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'
  import Progress from './components/Progress.vue'

  export default {
    data: function () {
      return {
        quotes: [
          'Placeholder quote'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote (quote) {
        if (this.quotes.length >= this.maxQuotes) {
          alert('Please delete some quotes')
        }
        this.quotes.push(quote)
      },
      deleteQuote (index) {
        this.quotes.splice(index, 1)
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appProgress: Progress
    }
  }
</script>

<style>
</style>
