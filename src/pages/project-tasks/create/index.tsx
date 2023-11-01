import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { projectTaskValidationSchema } from 'validationSchema/project-tasks';
import { ProjectInterface } from 'interfaces/project';
import { DeveloperInterface } from 'interfaces/developer';
import { ProjectTaskInterface } from 'interfaces/project-task';

function ProjectTaskCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ProjectTaskInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.project_task.create({ data: values as RoqTypes.project_task });
      resetForm();
      router.push('/project-tasks');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ProjectTaskInterface>({
    initialValues: {
      description: '',
      required_date: new Date(new Date().toDateString()),
      status: '',
      document_file: '',
      started: new Date(new Date().toDateString()),
      project_id: (router.query.project_id as string) ?? null,
      developer_id: (router.query.developer_id as string) ?? null,
    },
    validationSchema: projectTaskValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Project Tasks',
              link: '/project-tasks',
            },
            {
              label: 'Create Project Task',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Project Task
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="required_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Required Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.required_date ? new Date(formik.values?.required_date) : null}
              onChange={(value: Date) => formik.setFieldValue('required_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.document_file}
            label={'Document File'}
            props={{
              name: 'document_file',
              placeholder: 'Document File',
              value: formik.values?.document_file,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="started" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Started
            </FormLabel>
            <DatePicker
              selected={formik.values?.started ? new Date(formik.values?.started) : null}
              onChange={(value: Date) => formik.setFieldValue('started', value)}
            />
          </FormControl>
          <AsyncSelect<ProjectInterface>
            formik={formik}
            name={'project_id'}
            label={'Select Project'}
            placeholder={'Select Project'}
            fetcher={() => roqClient.project.findManyWithCount({})}
            labelField={'description'}
          />
          <AsyncSelect<DeveloperInterface>
            formik={formik}
            name={'developer_id'}
            label={'Select Developer'}
            placeholder={'Select Developer'}
            fetcher={() => roqClient.developer.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/project-tasks')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'project_task',
    operation: AccessOperationEnum.CREATE,
  }),
)(ProjectTaskCreatePage);
