<template>
    <div class="container mt-8 flex flex-col h-full flex-grow">
        <div class="flex flex-row">
            <a class="flex mr-4 h-full max-w-20vw w-full select-none flex-col justify-end rounded-md shadow-md bg-gradient-to-b from-muted-50 to-muted p-6 no-underline outline-none focus:shadow-md from-slate-500 to-gray">
                <img src="/logo.svg" class="h-12 w-12">
                <div class="mb-2 mt-4 text-lg font-medium">
                    Main Problem Set
                </div>
                <p class="text-sm leading-tight text-muted-foreground">
                    Selected by GuOJ members, free to play.
                </p>
            </a>
            <div class="flex flex-grow rounded-md border shadow-md p-4">
                <h1 class="font-bold text-xl mr-4 flex">
                    <Icon name="fluent:search-sparkle-16-filled" class="text-size-xl mr-2" />
                    筛选
                </h1>
                <div class="flex flex-wrap mx-4">
                    <div class="mr-2 mb-2">
                        <Input placeholder="关键词" />
                    </div>
                    <div class="mr-2 mb-2">
                        <Input placeholder="标签" />
                    </div>
                    <div><Button>确定</Button></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col flex-grow mt-8">
            <div class="flex-grow h-full w-full border shadow-2xl rounded-t-3xl">
                <div class="pa-8">
                    <Table>
                        <TableCaption></TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead class="w-[100px] text-center">
                                    状态
                                </TableHead>
                                <TableHead>名称</TableHead>
                                <TableHead>标签</TableHead>
                                <TableHead class="text-right">
                                    数据
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell class="font-medium text-center">
                                    <Icon name="fluent:minimize-24-regular"></Icon>
                                </TableCell>
                                <TableCell>P-1000 A+B Problem</TableCell>
                                <TableCell>
                                    <a class="tag">Bruteforce</a>
                                    <a class="tag">Approved</a>
                                    <a class="tag !bg-amber">*1000</a>
                                    <a class="tag !bg-amber">*Easy</a>
                                </TableCell>
                                <TableCell class="text-right">
                                    
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.tag {
    @apply px-1 mx-1 bg-cyan text-white rounded-sm
}
</style>
