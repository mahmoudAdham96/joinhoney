<template>
  <div class="">
    <div v-if="!isLoaded" class="w-10/12 mx-auto mt-10">
      <div class="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto">
        <div v-for="item in 12" :key="item" class="max-w-sm overflow-hidden bg-white rounded-lg dark:bg-gray-800">
          <div style="z-index: 1; overflow: hidden">
            <div class="bg-gray-200 w-full h-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isLoaded && products" class="w-10/12 mx-auto mt-10">
      <div class="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto">
        <div v-for="item in products" :key="item.id"
          class="overflow-hidden border border-gray-200 shadow-md bg-white rounded-lg dark:bg-gray-800">
          <div @click.prevent="(e) => navigat(e, item)">
            <div style="z-index: 1; overflow: hidden">
              <Carousel :per-page="1" :mouse-drag="true" :navigationEnabled="true" :indicators="false" :controls="true">
                <!-- :rtl="true" -->
                <!-- <slide tabindex="1" v-for="img in 5" :key="img">
                <img
                  class="w-full"
                  :src="`https://picsum.photos/300/30${img}`"
                  alt=""
                /> -->
                <slide tabindex="1" v-for="img in item.OptionImageUrlList" :key="img">
                  <img class="w-full" :src="img" alt="" />
                </slide>
              </Carousel>
            </div>
            <div class="text-right p-4">
              <a href="#">
                <h5 class="mb-1 tracking-tight text-sm text-gray-400 dark:text-white">
                  {{ item.ProductDescription.substr(0, 50) }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ item.ProductDescription.substr(0, 50) }}...
              </p>
              <h1 class="font-bold">{{ item.Price }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="products.length <= 0 && isLoaded" class="mt-20">
      <div>
        <img alt="Not Found" class="loading-0-2-50 load-0-2-51 w-20 m-auto"
          data-src="https://cdn.joinhoney.com/search/not-found.png" data-srcset="
    https://cdn.joinhoney.com/images/search/not-found.png 1x,
    https://cdn.joinhoney.com/images/search/not-found@2x.png 2x,
    https://cdn.joinhoney.com/images/search/not-found@3x.png 3x
  " sizes="" title="" src="https://cdn.joinhoney.com/search/not-found.png" srcset="
            https://cdn.joinhoney.com/images/search/not-found.png    1x,
            https://cdn.joinhoney.com/images/search/not-found@2x.png 2x,
            https://cdn.joinhoney.com/images/search/not-found@3x.png 3x
          " />
      </div>
      <div class="text-xl font-bold mt-4">No results for “{{ search }}”</div>
      <p>Check spelling for any typos or errors</p>
      <!-- <input
        type="text"
        id="first_name"
        ref="fileInput"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      /> -->
      <button @click="this.$refs.fileInput.focus()" class="trigger">
        Try Another Search
      </button>
    </div>
    <div v-if="products.length >= 1" class="Page navigation mt-20">
      <paginate :page-count="getPaginateCount" :prev-text="'Previous'" :next-text="'next'"
        :click-handler="paginateClickCallback" :container-class="'inline-flex -space-x-px'" :page-class="''"
        :page-link-class="'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
        :prev-class="''"
        :prev-link-class="'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
        :next-class="''"
        :next-link-class="'py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
        :first-last-button="true" :first-button-text="'<<'" :last-button-text="'>>'"
        :active-class="' active-page  text-blue-600 bg-yellow-600   hover:bg-yellow-200  hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'">
      </paginate>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import paginate from "vuejs-paginate";

export default {
  data() {
    return {
      products: [],
      pages: [],
      search: "t-shert",
      isLoaded: false,
      currentPage: 1,
      perPage: 48,
    };
  },
  props: ["valSearch"],
  components: {
    Carousel,
    Slide,
    paginate,
  },
  watch: {
    currentPage: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (newValue) {
          this.gitData();
        }
      },
    },
    valSearch: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (newValue) {
          this.search = newValue;
          this.gitData();
        }
      },
    },
  },
  methods: {
    // handleCustomChange(s) {
    //   this.search = s;
    //   console.log(this.valSearch);
    //   this.gitData();
    // },
    paginateClickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
    navigat(e, item) {
      const { className } = e.target;
      if (!className.includes("VueCarousel")) {
        this.$router.push(`/product/${item.OzelKodRenkKod}`)
      }
    },
    init() {
      this.search = this.$route.params?.search;
      this.gitData();
    },
    gitData() {
      this.isLoaded = false;
      const baseURI = `https://honey-api.onrender.com/api/v1/products/${this.search}?page=${this.currentPage}`;
      axios
        .get(baseURI)
        .then((response) => {
          this.products = response.data.products;
          this.pages = response.data.pages;
          this.currentPage = this.pages.CurrentPageIndex;
          console.log(this.products);
          // console.log(this.products.data.pages.CurrentPageIndex);
          setTimeout(() => (this.isLoaded = true), 500);
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.init();
  },
  computed: {
    getItems: function () {
      // let start = (this.currentPage - 1) * this.perPage;
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.products.slice(start, end);
    },
    getPaginateCount: function () {
      return Math.ceil(this.pages.PageCount);
    },
    gitValueSearch() {
      return this.search == this.valSearch;
    },
    // filteredList() {
    //   return this.products.filter((item) => {
    //     return item.title.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
  },
};
</script>
<style>
.VueCarousel-slide {
  height: 250px;
}

.active-page a {
  background-color: #d97706 !important;
  color: white;
}
</style>
