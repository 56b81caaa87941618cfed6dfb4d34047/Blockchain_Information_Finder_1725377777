<template>
    <main class="flex flex-col items-center justify-center bg-gray-50 w-1/2 sm:px-4 py-10 mx-auto">
        <div class="w-full space-y-6 text-gray-600 sm:max-w-md">
            <div class="text-center">
                <div class="mt-5 space-y-2">
                    <div class="flex justify-center">
                        <h3 class="text-gray-800 text-xl font-bold">
                            Stay Ahead in Blockchain: Create Your Account
                        </h3>
                    </div>
                    <p class="text-center">
                        Already tracking blockchain trends?
                        <a href="javascript:void(0)" class="text-center font-medium text-indigo-600 hover:text-indigo-500">
                            Log In to Your Blockchain Insights
                        </a>
                    </p>
                </div>
            </div>
            <div class="bg-white text-center shrink shadow py-6 sm:p-6 sm:rounded-lg">
                <form onSubmit="event.preventDefault()" class="space-y-5">
                    <div>
                        <label class="font-medium">Enter your name</label>
                        <input type="text" required class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                    </div>
                    <div>
                        <label class="font-medium">Your email for blockchain updates</label>
                        <input type="email" required class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                    </div>
                    <div>
                        <label class="font-medium">Secure password (min. 8 characters)</label>
                        <input type="password" required class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                    </div>
                    <div>
                        <button class="text-xs px-4 py-2 pr-10 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                            <h6 class="text-gray-800 text-xs font-medium">Add Another Blockchain Explorer</h6>
                        </button>
                    </div>
                </form>
                <div class="mt-5">
                    <button class="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-xs font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                        <!-- Comment: Google Icon SVG here -->
                        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" class="h-5" />
                        <span class="text-xs font-medium">Quick Sign Up with Google</span>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'SignUpWithNameEmailPassword',
    data() {
        return {};
    }
};
</script>
