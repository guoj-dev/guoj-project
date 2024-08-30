<template>
    <div class="flex items-center">
        <div v-if="isLoggedin" class="logged-in-status flex">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="ghost" class="relative h-[36px] w-[36px] rounded-full">
                        <Avatar class="p-a h-[36px] w-[36px]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/31064092?v=4" alt="@radix-vue" />
                            <AvatarFallback>Quank</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56" align="end">
                    <DropdownMenuLabel class="font-normal flex">
                        <div class="flex flex-col space-y-1">
                            <p class="text-sm font-medium leading-none">
                                {{ auth.username }}
                            </p>
                            <p class="text-xs leading-none text-muted-foreground">
                                {{ auth.email }}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem class="dropdown-item">
                            <Icon name="fluent:document-bullet-list-24-regular" class="mr-1" />Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem class="dropdown-item">
                            <Icon name="fluent-settings-24-regular" class="mr-1" />User Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem class="dropdown-item">
                            <Icon name="fluent-people-24-regular" class="mr-1" />My Organizations
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="logout" class="dropdown-item">
                        <Icon name="material-symbols-logout-rounded" class="mr-1" />Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div v-else>
            <div class="flex">
                <Button class="h-8 w-16" variant="ghost" v-on:click="navigateTo('/login')">Login</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/store/auth';

const auth = useAuthStore();

const router = useRouter()
const isLoggedin = computed(() => auth.isAuthed);

const logout = () => { auth.logout()}

</script>

<style scoped>
.dropdown-item {
    user-select: none;
    cursor: pointer;
}
</style>
