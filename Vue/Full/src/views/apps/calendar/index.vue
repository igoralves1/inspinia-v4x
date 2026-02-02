<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Calendar" subtitle="Apps" />
            <div class="outlook-box">
                <BCard no-body class="h-100 mb-0 d-none d-lg-flex rounded-end-0 overflow-y-auto">
                    <BCardBody>
                        <button class="btn btn-primary w-100 btn-new-event" @click="toggleModal">
                            <Icon icon="tabler:plus" class="me-2 align-middle" />
                            Create New Event
                        </button>

                        <div id="external-events">
                            <p class="text-muted mt-2 fst-italic fs-xs mb-3">
                                Drag and drop your event or click in the calendar
                            </p>

                            <div v-for="event in externalEvents" :key="event.id"
                                class="external-event fc-event fw-semibold d-flex align-items-center"
                                :class="`bg-${event.variant}-subtle text-${event.variant} border-start border-3 border-${event.variant}`"
                                :data-class="`bg-${event.variant}-subtle text-${event.variant} border-start border-3 border-${event.variant}`">
                                <Icon icon="tabler:circle-filled" class="me-2" />
                                {{ event.title }}
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
                <BCard no-body class="h-100 mb-0 rounded-start-0 flex-grow-1 border-start-0">
                    <div class="d-lg-none d-inline-flex card-header">
                        <BButton variant="primary" class="btn-new-event" @click="toggleModal">
                            <Icon icon="tabler:plus" class="me-2 align-middle" />
                            Create New Event
                        </BButton>
                    </div>

                    <simplebar class="card-body" style="height: calc(100% - 350px);">
                        <FullCalendar ref="fullCalendar" :bootstrap-font-awesome="false" :options="calendarOptions" />
                    </simplebar>
                </BCard>
            </div>

            <BModal v-model="modal" centered :title="isEditEvent ? 'Edit Event' : 'Add Event'"
                header-class="p-3 border-bottom-0" body-class="px-3 pb-3 pt-0" no-footer header-clss="border-bottom-1">
                <template #header>
                    <h4 class="modal-title" id="modal-title">
                        Create Event
                    </h4>
                    <button type="button" class="btn-close" @click="toggleModal" aria-label="Close"></button>
                </template>
                <BForm @submit.prevent="handleVuelidateSubmit">
                    <BRow>
                        <BCol cols="12">
                            <div class="mb-3">
                                <BFormGroup label="Event Name">
                                    <BFormInput type="text" v-model="v.eventName.$model" />
                                    <div v-if="v.eventName.$error" class="text-danger">Please provide a valid event
                                        name</div>
                                </BFormGroup>
                            </div>
                        </BCol>
                        <BCol cols="12">
                            <div class="mb-3">
                                <BFormGroup label="Category">
                                    <BFormSelect v-model="v.eventCategory.$model">
                                        <option
                                            value="bg-primary-subtle text-primary border-start border-3 border-primary">
                                            Primary</option>
                                        <option
                                            value="bg-secondary-subtle text-secondary border-start border-3 border-secondary">
                                            Secondary</option>
                                        <option
                                            value="bg-success-subtle text-success border-start border-3 border-success">
                                            Success</option>
                                        <option value="bg-info-subtle text-info border-start border-3 border-info">Info
                                        </option>
                                        <option
                                            value="bg-warning-subtle text-warning border-start border-3 border-warning">
                                            Warning</option>
                                        <option
                                            value="bg-danger-subtle text-danger border-start border-3 border-danger">
                                            Danger</option>
                                        <option value="bg-dark-subtle text-dark border-start border-3 border-dark">Dark
                                        </option>
                                        <option
                                            value="bg-purple-subtle text-purple border-start border-3 border-purple">
                                            Purple</option>
                                    </BFormSelect>
                                    <div v-if="v.eventCategory.$error" class="text-danger">Please select a valid
                                        event category
                                    </div>
                                </BFormGroup>
                            </div>
                        </BCol>
                    </BRow>
                    <b-row>
                        <b-col cols="6">
                            <b-button type="button" variant="danger" id="btn-delete-event" @click="deleteEvent"
                                v-if="isEditEvent">
                                Delete
                            </b-button>
                        </b-col>
                        <b-col cols="6" class="text-end">
                            <b-button type="button" variant="light" class="me-1" @click="toggleModal">
                                Close</b-button>
                            <b-button type="submit" variant="primary" id="btn-save-event"> Save</b-button>
                        </b-col>
                    </b-row>
                </BForm>
            </BModal>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { type CalendarOptions } from '@fullcalendar/core';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { externalEvents, initialEvents, options } from './components/data';
import { BButton, BCard, BCardBody, BCol, BContainer, BForm, BFormInput, BModal, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import simplebar from 'simplebar-vue';
import { Icon } from '@iconify/vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

const modal = ref(false);
const eventData = ref();
const isEditEvent = ref(false);
const isDateClick = ref('');

const dateEvent = (e: any) => {
    isDateClick.value = e.date;
    toggleModal();
};

const toggleModal = () => {
    modal.value = !modal.value;
    v.value.$reset();
    isEditEvent.value = false;
    vuelidateState.eventName = undefined;
    vuelidateState.eventCategory = undefined;
};

const deleteEvent = () => {
    eventData.value.remove();
    toggleModal();
};

const editEvent = (info: any) => {
    toggleModal();
    isEditEvent.value = true;
    eventData.value = info.event;
    vuelidateState.eventName = eventData.value.title;
    vuelidateState.eventCategory = eventData.value.classNames[0] || ''
};

const calendarOptions = ref<CalendarOptions>({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    slotDuration: '00:30:00',
    slotMinTime: '07:00:00',
    slotMaxTime: '19:00:00',
    themeSystem: 'bootstrap',
    bootstrapFontAwesome: false,
    buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List',
        prev: 'Prev',
        next: 'Next'
    },
    handleWindowResize: true,
    // height: window.innerHeight - 200,
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    height: 680,
    droppable: true,
    editable: true,
    selectable: true,
    events: initialEvents,
    eventClick: editEvent,
    dateClick: dateEvent
});

onMounted(() => {
    const ele = document.getElementById('external-events');

    if (ele) {
        new Draggable(ele, {
            itemSelector: '.external-event',
            eventData: function (eventEl: any) {
                return {
                    title: eventEl.innerText,
                    start: new Date(),
                    className: eventEl.getAttribute('data-class')
                };
            }
        });
    }
});

const vuelidateState = reactive({
    eventName: undefined,
    eventCategory: undefined
});

const vuelidateRules = computed(() => ({
    eventName: { required },
    eventCategory: { required }
}));

const v = useVuelidate(vuelidateRules, vuelidateState);

const fullCalendar = ref();

const handleVuelidateSubmit = async () => {
    const result = await v.value.$validate();
    if (result) {
        if (!isEditEvent.value) {
            const calendarApi = fullCalendar.value?.getApi();
            calendarApi.addEvent({
                id: (Math.floor(Math.random() * 100 + 20) - 20).toString(),
                title: vuelidateState.eventName,
                className: vuelidateState.eventCategory,
                start: isDateClick.value || new Date()
            });
        } else {
            eventData.value.setProp('title', vuelidateState.eventName);
            eventData.value.setProp('classNames', [vuelidateState.eventCategory]);
            isEditEvent.value = false;
        }
        isDateClick.value = '';
        toggleModal();
    }
};

usePageMeta('Calendar')
</script>
