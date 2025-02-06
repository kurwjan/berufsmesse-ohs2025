<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@components/ui/button";
import {
    LucideBuilding2,
    LucideChevronRight,
    LucideHouse,
    LucideMenu,
    LucideUser,
} from "lucide-vue-next";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@components/ui/sheet";

const { greetings } = defineProps<{
    greetings: { name: string; id: string }[];
}>();

const pathname = ref<string>("");

onMounted(() => {
    pathname.value = window.location.pathname;
});
</script>

<template>
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost">
                <LucideMenu :size="4" />
                <span class="font-normal">Menü</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" class="flex flex-col gap-4">
            <SheetHeader class="items-start">
                <SheetTitle>Menü</SheetTitle>
            </SheetHeader>
            <ul class="flex flex-col gap-2">
                <li>
                    <a
                        href="/"
                        class="flex justify-between p-3 rounded-xl bg-[--primary-container-color] hover:bg-[--pressed-primary-container-color] active:bg-[--pressed-primary-container-color]"
                        :class="{
                            '!bg-[--pressed-primary-container-color]':
                                pathname == '/',
                        }"
                    >
                        <div class="flex gap-2"><LucideHouse />Start</div>
                        <LucideChevronRight />
                    </a>
                </li>
                <li>
                    <a
                        href="/aussteller"
                        class="flex justify-between p-3 rounded-xl bg-[--primary-container-color] hover:bg-[--pressed-primary-container-color] active:bg-[--pressed-primary-container-color]"
                        :class="{
                            '!bg-[--pressed-primary-container-color]':
                                pathname == '/aussteller',
                        }"
                    >
                        <div class="flex gap-2">
                            <LucideBuilding2 />Aussteller
                        </div>
                        <LucideChevronRight />
                    </a>
                </li>
                <li class="flex flex-col gap-[2px]">
                    <a
                        v-for="(greeting, index) in greetings"
                        :href="`/grussworte/${greeting.id}`"
                        class="flex justify-between p-3 rounded-xl bg-[--primary-container-color] hover:bg-[--pressed-primary-container-color] active:bg-[--pressed-primary-container-color]"
                        :class="{
                            'rounded-b-none':
                                greetings.length > 1 && index == 0,
                            'rounded-t-none':
                                greetings.length > 1 &&
                                index == greetings.length - 1,
                            'rounded-none':
                                greetings.length > 2 &&
                                index != 0 &&
                                index != greetings.length - 1,
                            '!bg-[--pressed-primary-container-color]':
                                pathname == `/grussworte/${greeting.id}`,
                        }"
                    >
                        <div class="flex gap-2">
                            <LucideUser />Grußwort von {{ greeting.name }}
                        </div>
                        <LucideChevronRight />
                    </a>
                </li>
            </ul>
        </SheetContent>
    </Sheet>
</template>
