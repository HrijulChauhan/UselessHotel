<template>
  <body class="h-screen w-screen bg-slate-50">
    <div class="m-auto mb-5 w-3/4 pt-10 text-4xl font-semibold tracking-normal">
      Reserve your booking
    </div>

    <section class="m-auto flex w-3/4">
      <figure class="hidden md:block">
        <img
          src="https://imgur.com/6MmwQV1.jpg"
          alt=""
          class="h-[600px] w-[800px] bg-red-300 object-cover"
        />
        <figcaption class="text-xs pt-2 text-gray-400">View of the Rax and Schneeberg mountains  -Johann (Giovanni) Varrone </figcaption>
      </figure>
      <form @submit.prevent class="md:pl-10">
        <!-- Enter Name -->
        <span>
          <label
            for="Name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Enter name</label
          >

          <input
            type="text"
            placeholder="John Doe"
            class="mt-1 block w-80 rounded-sm border-0 py-2 pl-3 text-sm shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
          />
        </span>

        <!-- Enter Email -->
        <span>
          <label
            for="Email"
            class="mt-6 block text-sm font-medium leading-6 text-gray-900"
            >Enter email</label
          >

          <input
            type="text"
            placeholder="john.doe@gmail.com"
            class="mt-1 block w-80 rounded-sm border-0 py-2 pl-3 text-sm shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
          />
        </span>

        <!-- Enter location -->
        <span>
          <label
            for="Location"
            class="mt-6 block text-sm font-medium leading-6 text-gray-900"
            >Select Location</label
          >

          <select
            name=""
            id=""
            class="mt-1 block w-80 rounded-sm border-0 py-2 pl-2 text-sm text-gray-400 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
          >
            <option value="">New York, USA</option>
            <option value="">Turkey, Istanbul</option>
            <option value="">Mumbai, India</option>
            <option value="">Paris, France</option>
          </select>
        </span>

        <!-- Enter Entry Date -->
        <span>
          <label
            for="EntryDate"
            class="mt-6 block text-sm font-medium leading-6 text-gray-900"
            >Check-in Date</label
          >

          <input
            type="date"
            name=""
            id=""
            class="mt-1 block w-80 rounded-sm border-0 py-2 pl-2 text-sm text-gray-400 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
          />
        </span>

        <!-- Enter Exit Date -->
        <span>
          <label
            for="EntryDate"
            class="mt-6 block text-sm font-medium leading-6 text-gray-900"
            >Check-out Date</label
          >

          <input
            type="date"
            name=""
            id=""
            class="mt-1 block w-80 rounded-sm border-0 py-2 pl-2 text-sm text-gray-400 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
          />
        </span>

        <button class="discover mt-6 w-32 py-2 text-sm">Confirm</button>
      </form>
    </section>
  </body>
</template>

<script></script>

<style></style>
