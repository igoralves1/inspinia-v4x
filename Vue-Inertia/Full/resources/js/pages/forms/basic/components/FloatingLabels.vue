<template>
  <UICard title="Floating labels">
    <BRow>
      <BCol lg="12">
        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label for="floatingInputEmail" class="form-label">Email address</label>
          </BCol>
          <BCol lg="5">
            <BFormFloatingLabel label="Email address">
              <BFormInput
                id="floatingInputEmail"
                type="email"
                placeholder="name@example.com"
              />
            </BFormFloatingLabel>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label for="floatingPassword" class="form-label">Password</label>
          </BCol>
          <BCol lg="5">
            <BFormFloatingLabel label="Password">
              <BFormInput
                id="floatingPassword"
                type="password"
                placeholder="Password"
              />
            </BFormFloatingLabel>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label for="floatingTextarea" class="form-label">Comments</label>
          </BCol>
          <BCol lg="5">
            <BFormFloatingLabel label="Comments">
              <BFormTextarea
                id="floatingTextarea"
                placeholder="Leave a comment here"
                style="height: 100px"
              />
            </BFormFloatingLabel>
          </BCol>
        </BRow>

        <div class="border-top border-dashed my-3"></div>

        <BRow class="g-lg-4 g-2">
          <BCol lg="2">
            <label for="floatingSelect" class="form-label">Select Menu</label>
          </BCol>
          <BCol lg="5">
            <BFormFloatingLabel label="Works with selects">
              <BFormSelect id="floatingSelect" aria-label="Floating label select example">
                <BFormSelectOption value="">Open this select menu</BFormSelectOption>
                <BFormSelectOption value="1">One</BFormSelectOption>
                <BFormSelectOption value="2">Two</BFormSelectOption>
                <BFormSelectOption value="3">Three</BFormSelectOption>
              </BFormSelect>
            </BFormFloatingLabel>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </UICard>
</template>

<script setup lang="ts">
import { BCol, BFormFloatingLabel, BFormInput, BFormSelect, BFormSelectOption, BFormTextarea, BRow } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';
</script>