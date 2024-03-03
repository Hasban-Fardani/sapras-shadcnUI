<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <div>
    <Form onclick="this.preventDefault()" class="flex flex-col gap-2 mt-4">
      <!-- username -->
      <div>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" />
      </div>

      <!-- email -->
      <div>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </div>

      <!-- password -->
      <div>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </div>

      <!-- unit -->
      <div>
        <Label for="unit">Unit</Label>
        <Select name="unit" id="unit" default-value="unit a">
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="unit a">
                Unit A
              </SelectItem>
              <SelectItem value="unit b">
                Unit B
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <!-- submit -->
      <Button type="submit" class="mt-4 w-fit">Simpan</Button>
    </Form>
  </div>
</template>