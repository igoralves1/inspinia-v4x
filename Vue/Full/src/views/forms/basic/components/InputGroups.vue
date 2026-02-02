<template>
    <UICard title="Input Group">
        <BRow>
            <BCol lg="12">
                <BFormGroup label="Username" label-for="username" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BInputGroupText id="basic-addon1">@</BInputGroupText>
                                <BFormInput id="username" placeholder="Username" aria-describedby="basic-addon1" />
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Recipient" label-for="recipient" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BFormInput id="recipient" placeholder="Recipient's username"
                                    aria-describedby="basic-addon2" />
                                <BInputGroupText id="basic-addon2">@example.com</BInputGroupText>
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Amount" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BInputGroupText>$</BInputGroupText>
                                <BFormInput aria-label="Amount" />
                                <BInputGroupText>.00</BInputGroupText>
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Email Login" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BFormInput placeholder="Username" />
                                <BInputGroupText>@</BInputGroupText>
                                <BFormInput placeholder="Server" />
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Textarea" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BInputGroupText>With textarea</BInputGroupText>
                                <BFormTextarea rows="2" aria-label="With textarea" />
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Vanity URL" label-for="basic-url" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BInputGroupText id="basic-addon3">https://example.com/users/</BInputGroupText>
                                <BFormInput id="basic-url" aria-describedby="basic-addon3" />
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Wrapping" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup class="flex-nowrap">
                                <BInputGroupText id="addon-wrapping">@</BInputGroupText>
                                <BFormInput placeholder="Username" aria-describedby="addon-wrapping" />
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Dropdown + Input" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BDropdown variant="primary" text="Dropdown">
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                                <BFormInput />
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Input + Button" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BFormInput placeholder="Recipient's username" />
                                <BButton variant="dark">Button</BButton>
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="File Input" label-for="inputGroupFile04" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormFile id="inputGroupFile04" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Multiple Files" label-for="formFileMultiple01" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormFile id="formFileMultiple01" multiple />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Input Group Select" label-for="inputGroupSelect01" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BInputGroupText>Options</BInputGroupText>
                                <BFormSelect id="inputGroupSelect01">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </BFormSelect>
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>
            </BCol>
        </BRow>
    </UICard>
</template>

<script setup lang="ts">
import {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormFile,
    BFormSelect,
    BInputGroup,
    BInputGroupText,
    BButton,
    BDropdown,
    BDropdownItem
} from 'bootstrap-vue-next'
import UICard from '@/components/UICard.vue';
</script>
