<template>
  <BContainer fluid>
    <PageBreadcrumb title="Gray Sidebar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To switch to a gray sidebar, add
            <code>data-menu-color="gray"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setSideNavColor('gray')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setSideNavColor, reset} = useLayout();

usePageTitle('Gray Sidebar')

onMounted(() => {
  setSideNavColor('gray')
});

onBeforeUnmount(() => {
  reset();
});
</script>