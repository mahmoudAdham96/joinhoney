<template>
  <div class="relative">
    <input
      ref="fileInput"
      v-model.trim.lazy="search"
      @keyup.enter="handleChange"
      type="search"
      class="form-control relative flex-auto min-w-0 w-96 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none placeholder-yellow-600 placeholder-opacity-75"
      placeholder="البحث عن المتاجر أو العناصر"
      aria-label="Search"
      aria-describedby="button-addon2"
    />
    <div class="flex absolute inset-y-0 right-3 items-center pl-3">
      <button
        class="btn font-medium text-sm"
        type="button"
        id="button-addon2"
        @click="handleChange"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          class="w-4 text-blue-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            class="text-yellow-600 w-5 h-5 hover:text-yellow-400"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  // props: {
  //   searchVal: String,
  // },
  methods: {
    handleChange() {
      if (
        this.search.trim().length > 2
        //NavigationDuplicated
        // (this.search != this.$route.params?.search)
      ) {
        this.$emit("customChange", this.search.toUpperCase());
        this.$router.push(`/products/${this.search}`).catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });
        // window.location.reload(),
        this.search = "";
      }
    },
  },
};
</script>
