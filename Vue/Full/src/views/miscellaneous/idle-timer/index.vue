<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Idle Timer" subtitle="Miscellaneous" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader>
                            <h5 class="mb-0">Idle Timer</h5>
                        </BCardHeader>
                        <BCardBody>

                            <Vidle :duration="inactiveDuration" @idle="handleIdle" @refresh="handleActive" />


                            <div v-if="state === 'Inactive'" class="alert alert-danger">
                                Your session has expired. Please move your mouse to resume your activity.
                            </div>

                            <p class="text-muted">
                                The Idle Timer plugin allows you to monitor user activity on the page. Idle is defined
                                as a
                                lack of mouse movement, scrolling, or keyboard input.
                            </p>

                            <div class="text-center p-3 h-200">
                                <Icon icon="tabler:hand-finger" class="fs-36 mb-3 d-block mx-auto" />
                                <h3 class="fst-italic">Please stay idle for {{ inactiveDuration }} seconds</h3>
                            </div>

                            <p class="mb-0">
                                You can instantiate the timer either statically or on a specific element. Element-bound
                                timers will only track activity within that element,
                                whereas global timers will monitor activity on the entire page.
                            </p>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import Vidle from 'v-idle'
import 'vue3-toastify/dist/index.css'

const inactiveDuration = 5

const state = ref<'Active' | 'Inactive'>('Active')

const handleIdle = () => {
    state.value = 'Inactive'
    toast.warning("You've been inactive for too long. Please interact with the page to continue.", {
        position: 'top-right',
        autoClose: 2000,
    })
}

const handleActive = () => {
    if (state.value === 'Inactive') {
        toast.success('We missed you! Welcome back!', {
            position: 'top-right',
            autoClose: 2000,
        })
        state.value = 'Active'
    }
}

usePageMeta('Idle Timer')
</script>