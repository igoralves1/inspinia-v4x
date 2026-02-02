<template>
  <BContainer fluid>
    <PageBreadcrumb title="On Hover Active Sidebar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To enable the full menu on hover after minimizing the sidebar, add
            <code>data-sidenav-size="on-hover-active"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setSideNavSize('on-hover-active')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setSideNavSize, reset} = useLayout();

usePageTitle('On Hover Active Sidebar')

onMounted(() => {
  setSideNavSize('on-hover-active')
});

onBeforeUnmount(() => {
  reset();
});
</script>