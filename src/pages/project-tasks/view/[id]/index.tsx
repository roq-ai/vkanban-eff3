import { Box, Center, Flex, Link, List, ListItem, Spinner, Stack, Text, Image, Button } from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import { Error } from 'components/error';
import { FormListItem } from 'components/form-list-item';
import { FormWrapper } from 'components/form-wrapper';
import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useMemo } from 'react';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { routes } from 'routes';
import { compose } from 'lib/compose';
import {
  AccessOperationEnum,
  AccessServiceEnum,
  requireNextAuth,
  useAuthorizationApi,
  withAuthorization,
} from '@roq/nextjs';
import { UserPageTable } from 'components/user-page-table';
import { EntityImage } from 'components/entity-image';
import { FiEdit2 } from 'react-icons/fi';
import { convertQueryToPrismaUtil } from 'lib/utils';
import * as RoqTypes from 'lib/roq/types';
import { useProjectTaskFindFirst, useRoqClient } from 'lib/roq';

import { ProjectTaskInterface } from 'interfaces/project-task';
import { TaskStatusListPage } from 'pages/task-statuses';

function ProjectTaskViewPage() {
  const { hasAccess } = useAuthorizationApi();
  const router = useRouter();
  const id = router.query.id as string;
  const roqClient = useRoqClient();
  const queryParams = useMemo<{ include: { project: boolean; developer: boolean } }>(
    () =>
      convertQueryToPrismaUtil(
        {
          relations: ['project', 'developer'],
          id,
        },
        'project_task',
      ),
    [id],
  );
  const { data, error, isLoading } = useProjectTaskFindFirst(queryParams, {}, { disabled: !id });

  const [deleteError, setDeleteError] = useState(null);
  const [createError, setCreateError] = useState(null);

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
              label: 'Project Task Details',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            <FormWrapper wrapperProps={{ border: 'none', gap: 3, p: 0 }}>
              <Flex alignItems="center" w="full" justifyContent={'space-between'}>
                <Box>
                  <Text
                    sx={{
                      fontSize: '1.875rem',
                      fontWeight: 700,
                      color: 'base.content',
                    }}
                  >
                    Project Task Details
                  </Text>
                </Box>
                {hasAccess('project_task', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                  <NextLink href={`/project-tasks/edit/${id}`} passHref legacyBehavior>
                    <Button
                      onClick={(e) => e.stopPropagation()}
                      mr={2}
                      padding="0rem 0.5rem"
                      height="24px"
                      fontSize="0.75rem"
                      variant="outline"
                      color="state.info.main"
                      borderRadius="6px"
                      border="1px"
                      borderColor="state.info.transparent"
                      leftIcon={<FiEdit2 width="12px" height="12px" color="state.info.main" />}
                    >
                      Edit
                    </Button>
                  </NextLink>
                )}
              </Flex>

              <List
                w="100%"
                css={{
                  '> li:not(:last-child)': {
                    borderBottom: '1px solid var(--chakra-colors-base-300)',
                  },
                }}
              >
                <FormListItem label="Description" text={data?.description} />

                <FormListItem
                  label="Required Date"
                  text={data?.required_date ? format(data?.required_date, 'dd-MM-yyyy') : ''}
                />

                <FormListItem label="Status" text={data?.status} />

                <FormListItem label="Document File" text={data?.document_file} />

                <FormListItem label="Started" text={data?.started ? format(data?.started, 'dd-MM-yyyy') : ''} />

                <FormListItem
                  label="Created At"
                  text={data?.created_at ? format(data?.created_at, 'dd-MM-yyyy') : ''}
                />

                <FormListItem
                  label="Updated At"
                  text={data?.updated_at ? format(data?.updated_at, 'dd-MM-yyyy') : ''}
                />

                {hasAccess('project', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
                  <FormListItem
                    label="Project"
                    text={
                      <Link as={NextLink} href={`/projects/view/${data?.project?.id}`}>
                        {data?.project?.description + ''}
                      </Link>
                    }
                  />
                )}
                {hasAccess('developer', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
                  <FormListItem
                    label="Developer"
                    text={
                      <Link as={NextLink} href={`/developers/view/${data?.developer?.id}`}>
                        {data?.developer?.email + ''}
                      </Link>
                    }
                  />
                )}
              </List>
            </FormWrapper>

            {hasAccess('task_status', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
              <Box borderRadius="10px" border="1px" borderColor={'base.300'} mt={6} p={'18px'}>
                <TaskStatusListPage
                  filters={{ project_task_id: id }}
                  hidePagination={true}
                  hideTableBorders={true}
                  showSearchFilter={false}
                  pageSize={5}
                  titleProps={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                />
              </Box>
            )}
          </>
        )}
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
    operation: AccessOperationEnum.READ,
  }),
)(ProjectTaskViewPage);
