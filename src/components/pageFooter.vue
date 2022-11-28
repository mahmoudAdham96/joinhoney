<template>
  <div class="mt-10">
    <footer
      :class="[
        this.$route.path.includes('/product')
          ? 'bg-white border-t border-gray-100'
          : 'bg-black',
        '',
      ]"
    >
      <div class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:text-right">
          <div
            class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <p
                :class="[
                  this.$route.path.includes('/product')
                    ? 'text-black'
                    : 'text-white',
                  'font-medium text-xl',
                ]"
              >
                شركة
              </p>

              <nav
                class="flex flex-col whitespace-pre-line mt-4 leading-8 space-y-2 text-sm text-gray-500"
              >
                <a class="hover:opacity-75" href=""> حول </a>
                <a class="hover:opacity-75" href=""> مساعدة </a>
                <a class="hover:opacity-75" href=""> وظائف </a>
                <a class="hover:opacity-75" href=""> أخبار </a>
                <a class="hover:opacity-75" href=""> مقالات </a>
                <a class="hover:opacity-75" href=""> وسائل الإعلام </a>
              </nav>
            </div>

            <div>
              <p
                :class="[
                  this.$route.path.includes('/product')
                    ? 'text-black'
                    : 'text-white',
                  'font-medium text-xl',
                ]"
              >
                منتج
              </p>

              <nav
                class="flex flex-col mt-4 space-y-2 text-sm leading-8 text-gray-500"
              >
                <a class="hover:opacity-75" href=""> قائمة منسدلة </a>
                <a class="hover:opacity-75" href=""> شارة أمازون </a>
                <a class="hover:opacity-75" href=""> عسل الذهب </a>
                <a class="hover:opacity-75" href=""> للمسوقين بالعمولة </a>
                <a class="hover:opacity-75" href="">خريطة الموقع </a>
              </nav>
            </div>

            <div>
              <p
                :class="[
                  this.$route.path.includes('/product')
                    ? 'text-black'
                    : 'text-white',
                  'font-medium text-xl',
                ]"
              >
                قانوني
              </p>

              <nav
                class="flex flex-col mt-4 space-y-2 text-sm leading-8 text-gray-500"
              >
                <a class="hover:opacity-75" href=""> خصوصية </a>
                <a class="hover:opacity-75" href=""> حقوق النشر </a>
                <a class="hover:opacity-75" href="">براءات الاختراع </a>
                <a class="hover:opacity-75" href=""> شروط </a>
                <a class="hover:opacity-75" href=""> الافصاح عن الاعلانات </a>
                <a class="hover:opacity-75" href="">امكانية الوصول </a>
              </nav>
            </div>

            <div>
              <p
                :class="[
                  this.$route.path.includes('/product')
                    ? 'text-black'
                    : 'text-white',
                  'font-medium text-xl',
                ]"
              >
                تابعنا
              </p>

              <nav
                class="flex flex-col mt-4 space-y-2 text-sm leading-8 text-gray-500"
              >
                <a class="hover:opacity-75" href=""> فيسبوك </a>
                <a class="hover:opacity-75" href=""> تويتر </a>
                <a class="hover:opacity-75" href=""> انستغرام </a>
                <a class="hover:opacity-75" href=""> بينتيريست </a>
              </nav>
            </div>
          </div>
          <div>
            <h1
              :class="[
                this.$route.path.includes('/product')
                  ? 'text-black'
                  : 'text-white',
                'mb-4',
              ]"
            >
              احصل على التطبيق
            </h1>
            <div
              :class="[
                this.$route.path.includes('/product') ? 'bg-black' : '',
                'flex border w-40 rounded-lg px-2 py-1',
              ]"
            >
              <div class="text-white ml-4">
                <p class="text-xs">GET IT ON</p>
                <p class="text-sm md:text-base">Google Play</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                class="w-7 md:w-8"
              />
            </div>
            <div
              :class="[
                this.$route.path.includes('/product') ? 'bg-black' : '',
                'flex border w-40 rounded-lg px-2 py-1 my-2',
              ]"
            >
              <div class="text-white ml-4">
                <p class="text-xs text-gray-200">Download on</p>
                <p class="text-sm md:text-base">Apple Store</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                class="w-7 md:w-8"
              />
            </div>
            <p class="text-xs md:text-sm text-gray-600">
              Google Play وشعار Google Play هما علامتان تجاريتان لشركة Google
              Inc .. Apple وشعار Apple هما علامتان تجاريتان لشركة Apple Inc. ،
              مسجلتان في الولايات المتحدة وبلدان أخرى. App Store هي علامة خدمة
              لشركة Apple Inc. ، مسجلة في الولايات المتحدة وبلدان أخرى.
            </p>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="mt-8 text-xs text-right text-gray-600">
            &copy; 2022 Honey Science LLC
            <p>أصبح العسل الآن جزءًا من عائلة PayPal. يتعلم أكثر هنا .</p>
          </div>
          <div class="mt-8 text-xs text-gray-50">
            مصر
            <span class="border border-r border-gray-50r mx-2"></span>
            انجليزي
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    navBarColor() {
      if (this.$route.path.includes("/product")) {
        return "bg-white";
      }
      return "bg-black";
    },
  },
};
</script>
