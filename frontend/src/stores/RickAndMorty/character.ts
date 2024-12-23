import { defineStore } from 'pinia'
import type { SingleItemInterface } from '@/types/RickAndMorty/SingleItemInterface.ts'
import type { ResponseInterface } from '@/types/RickAndMorty/ResponseInterface.ts'

const baseUrl = '/api/rick-and-morty/character/'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    response: {} as ResponseInterface | void,
    singleItem: {} as SingleItemInterface | void,
    items: [] as SingleItemInterface[] | [],
    totalPages: 1,
    nextPage: 1,
    isLoading: false,
    hasError: false,
  }),

  actions: {
    async fetchList() {
      if (this.isLoading || this.nextPage > this.totalPages) return

      this.isLoading = true

      this.response = await fetch(baseUrl + '?page=' + this.nextPage)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }

          return Promise.reject(response)
        })
        .then((result) => {
          this.hasError = false
          this.nextPage = this.nextPage + 1
          this.items = this.items.concat(result.results)
          this.totalPages = result.info.pages

          return result
        })
        .catch((response) => {
          this.hasError = true

          response.json().then((json: ResponseInterface) => {
            this.response = json
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    async fetchSingle(id = 1) {
      if (this.items[id - 1]) {
        this.hasError = false
        this.singleItem = this.items[id - 1]
      } else {
        this.isLoading = true

        this.response = await fetch(baseUrl + id)
          .then(function (response) {
            if (response.ok) {
              return response.json()
            }

            return Promise.reject(response)
          })
          .then((result) => {
            this.hasError = false
            this.singleItem = result

            return result
          })
          .catch((response) => {
            this.hasError = true

            response.json().then((json: ResponseInterface) => {
              this.response = json
            })
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
  },
})
