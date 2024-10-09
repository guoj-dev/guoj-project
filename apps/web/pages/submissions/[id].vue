<template>
    <div class="container flex flex-col flex-grow h-full">
        <div class="mt-8 px-8 flex flex-col">
            <div class="flex">
                <div class="ml-8">
                    <p class="font-bold text-4xl">Submission #1</p>
                </div>
            </div>
            <div class="divider mt-4 w-full border"></div>
            <Accordion collapsible :default-value="defaultStatusValue">
                <AccordionItem v-for="item in statusItems" :key="item.value" :value="item.value">
                    <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                    <AccordionContent>
                        {{ item.content }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<script lang="ts" setup>
const defaultStatusValue=5

const statusItems=[
    { value:1, title:"In judger queue.", content: "In judger queue \"Global\"." },
    { value:2, title:"In judger queue.", content: "In judger queue \"Global\"." },
    { value:3, title:"In judger queue.", content: "In judger queue \"Global\"." },
    { value:4, title:"In judger queue.", content: "In judger queue \"Global\"." },
    { value:5, title:"In judger queue.", content: "In judger queue \"Global\"." },
]

</script>