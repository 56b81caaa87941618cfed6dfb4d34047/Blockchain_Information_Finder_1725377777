<template>
  <div>
    <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
      <div class="space-y-3 text-center">
        <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
        <p class="text-gray-600 max-w-lg mx-auto text-lg">Got questions about our blockchain discovery app? We've got answers.</p>
      </div>
      <div class="mt-14 max-w-2xl mx-auto">
        <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
          <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {{ item.q }}
            <!-- SVG adjustment depending on whether faq is selected -->
            <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </h4>
          <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
            <div class="px-4 py-6">
              <p class="text-gray-700 pb-4 max-w-full text-lg">{{ item.a }}</p>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      selectedFaq: null,
      faqs: [
        { q: "What is this blockchain discovery app?", a: "Our app is a cutting-edge tool designed to help users find and explore new blockchain projects, cryptocurrencies, and decentralized applications (dApps) across various networks." },
        { q: "How does the app work?", a: "The app uses advanced algorithms and real-time data feeds to scan multiple blockchain networks, identifying new projects, tokens, and dApps. It then presents this information in an easy-to-understand format, allowing users to stay up-to-date with the latest blockchain innovations." },
        { q: "Is this app suitable for beginners?", a: "Absolutely! Our app is designed with both beginners and experts in mind. We provide user-friendly interfaces and educational resources to help newcomers understand blockchain concepts while offering advanced features for experienced users." },
        { q: "How often is the information updated?", a: "Our app updates information in real-time, ensuring you always have access to the latest blockchain developments. You can set custom alerts for specific types of projects or events to stay informed as soon as new information becomes available." },
        { q: "Can I track my favorite blockchain projects using this app?", a: "Yes! Our app allows you to create a personalized watchlist of your favorite blockchain projects, tokens, and dApps. You can easily monitor their performance, receive updates, and set custom notifications for important events or milestones." }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Add any desired scoped CSS here */
</style>
