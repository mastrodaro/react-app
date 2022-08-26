import { api } from "@/store/services";
import { Task } from "@/store/models/task";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], null>({
      query: () => "tasks",
      providesTags: ["tasks"],
    }),
    createTask: builder.mutation<Task, Omit<Task, "id" | "status">>({
      query: (body) => ({
        url: "tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteCluster: builder.mutation<null, string>({
      query: (id) => ({
        url: `clusters/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteClusterMutation,
} = tasksApi;
