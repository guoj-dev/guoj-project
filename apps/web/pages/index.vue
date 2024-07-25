<template>
    <div
        class="container flex-1 items-start grid grid-cols-3 gap-2 my-8">
        <div class="pa-8 rounded-lg border shadow-sm heading-card relative">
            <div class="heading-card-grid absolute"></div>
            <p class="font-bold text-size-3xl text-white mb-4">Project GuOJ</p>
            <p class="font-medium text-white text-size-xl">The next generation programming community.</p>
            <p class="font-medium text-gray-100 text-size-md">Hand crafted, made by ❤️.</p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle class="text-size-lg">News</CardTitle>
                <CardDescription>
                    What's new around here in the community.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div></div>
            </CardContent>
        </Card>
    </div>

</template>

<script setup lang="ts">

</script>

<style>
.heading-card {
    background: linear-gradient(30deg, #404040 0%, #515151 16%, #626262 33%, #737373 50%, #858585 66%, #989898 83%, #ababab 100%);
}

.heading-card-grid {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.075)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    -webkit-mask-image: linear-gradient(90deg, transparent 60%, black 80%);
    mask-image: linear-gradient(90deg, transparent 0%, black 80%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
