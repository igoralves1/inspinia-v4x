<template>
  <BContainer fluid>
    <PageBreadcrumb title="With Lines"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            If you want to display a line with each menu item, add the class
            <code>"sidebar-with-line"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>toggleAttribute('class', 'sidebar-no-icons sidebar-with-line')</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
import {toggleAttribute} from "~/helpers/layout";

usePageTitle('Sidebar with Lines')

onMounted(() => {
  toggleAttribute('class', 'sidebar-with-line')
});

onBeforeUnmount(() => {
  toggleAttribute('class', '')
});
</script>