<template>
  <BContainer fluid>
    <PageBreadcrumb title="Dark Topbar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To switch to a dark topbar, add
            <code>data-topbar-color="dark"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setTopBarColor('dark')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setTopBarColor, reset} = useLayout();

usePageTitle('Dark Topbar')

onMounted(() => {
  setTopBarColor('dark')
});

onBeforeUnmount(() => {
  reset();
});
</script>