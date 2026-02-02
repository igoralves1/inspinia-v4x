<template>
    <BTabs nav-class="nav nav-tabs nav-bordered mb-3">
        <BTab>
            <template #title>
                <Icon name="tabler:message-circle" class="fs-lg me-md-1 align-middle" />
                <span class="d-none d-md-inline-block align-middle">Comments</span>
            </template>
            <Comments />
        </BTab>
        <BTab>
            <template #title>
                <Icon name="tabler:list-check" class="fs-lg me-md-1 align-middle" />
                <span class="d-none d-md-inline-block align-middle">Task List</span>
            </template>
            <TaskList />
        </BTab>
        <BTab>
            <template #title>
                <Icon name="tabler:activity" class="fs-lg me-md-1 align-middle" />
                <span class="d-none d-md-inline-block align-middle">Activity</span>
            </template>
            <Activity />
        </BTab>
    </BTabs>

</template>

<script setup lang="ts">
import { BTabs } from 'bootstrap-vue-next';
import Comments from './Comments.vue';
import TaskList from './TaskList.vue';
import Activity from './Activity.vue';


</script>

<style scoped></style>