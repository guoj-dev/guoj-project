<template>
    <div
        class="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div class="absolute inset-0 bg-gradient-to-b from-black to-zinc-500">
            </div>
            <div class="grid-background"></div>
            <div class="relative z-20 flex items-center text-2xl font-bold site-header-login" href="/">GuOJ</div>
            <div class="relative z-20 mt-auto">
                <blockquote class="space-y-2">
                    <p class="text-xl">Blocquote here.</p>
                    <footer>Name here</footer>
                </blockquote>
            </div>
        </div>
        <div class="relative h-full flex-col items-center justify-center grid">
            <div class="lg:p-8">
                <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div class="flex flex-col space-y-2 text-center">
                        <h1 class="text-2xl font-semibold tracking-tight">Login</h1>
                        <p class="text-sm text-muted-foreground">
                            Enter your Username or email here to login.
                        </p>
                    </div>
                    <div class="grid gap-6">
                        <div class="grid gap-4">
                            <Input placeholder="Username" v-model="user" />
                            <Input placeholder="Password" type="password" v-model="password" />
                            <Button @click="login">Login</Button>
                        </div>
                        <Separator label="Or Continue With" />
                        <Button variant="outline">
                            <Icon name="mdi:github" class="mr-2 text-xl" />
                            GitHub
                        </Button>
                    </div>
                </div>
            </div>
            <div class="absolute register-btn-container p-8">
                <a class="text-sm text-muted-foreground mr-4">Or, you can...</a>
                <Button v-on:click="navigateTo('/register')">
                    Register
                </Button>
            </div>
            <div class="absolute back-btn-container p-8">

                <Button variant="outline" size="icon" v-on:click="back">
                    <Icon name="mdi-chevron-right" class="text-xl" />
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const router = useRouter()


const auth = useAuthStore();

definePageMeta({
    topbar: false
})

const user = ref('');
const password = ref('');

const login = async () => {
    const res = await auth.login(user.value, password.value);
    if ( res )
        setTimeout(() => {
            router.push('/')
        }, 1000)
}

const back = () => {
    navigateTo('/');
}
</script>

<style scoped>
.container {
    height: 100vh;
    padding: 0;
}
.grid-background {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.075)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

.back-btn-container {
    bottom: 0;
    right: 0;
}

.register-btn-container {
    top: 0;
    right: 0;
}

.site-header-login {
    user-select: none;
    cursor: pointer;
}
</style>
