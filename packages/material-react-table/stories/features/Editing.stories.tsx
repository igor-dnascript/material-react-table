import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import {
  type MRT_Cell,
  type MRT_TableOptions,
  MaterialReactTable,
} from '../../src';
import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Editing Examples',
};

export default meta;

const usStates = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

type Person = {
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  state: string;
};

const data: Person[] = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const EditingEnabledEditModeModalDefault = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: false,
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      enableEditing
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EditingEnabledEditModeRow = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: false,
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="row"
      enableEditing
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EditingEnabledEditModeCell = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveCell = (cell: MRT_Cell<Person>, value: any) => {
    //@ts-ignore
    tableData[cell.row.index][cell.column.id] = value;
    setTableData([...tableData]);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: false,
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="cell"
      enableEditing
      muiEditTextFieldProps={({ cell }) => ({
        onBlur: (event) => {
          handleSaveCell(cell, event.target.value);
        },
      })}
    />
  );
};

export const EditingEnabledEditModeCellWithRowActions = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveCell = (cell: MRT_Cell<Person>, value: any) => {
    //@ts-ignore
    tableData[cell.row.index][cell.column.id] = value;
    setTableData([...tableData]);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: false,
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="cell"
      enableEditing
      enableRowActions
      muiEditTextFieldProps={({ cell }) => ({
        onBlur: (event) => {
          handleSaveCell(cell, event.target.value);
        },
      })}
    />
  );
};

export const EditingEnabledEditModeTable = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveCell = (cell: MRT_Cell<Person>, value: string) => {
    //@ts-ignore
    tableData[+cell.row.index][cell.column.id] = value;
    setTableData([...tableData]);
    console.info('saved cell with value: ', value);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="table"
      enableEditing
      muiEditTextFieldProps={({ cell }) => ({
        onBlur: (event) => {
          handleSaveCell(cell, event.target.value);
        },
      })}
    />
  );
};

export const EditSelectVariant = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    row,
    values,
  }) => {
    tableData[+row.index] = values;
    setTableData([...tableData]);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          editSelectOptions: usStates,
          editVariant: 'select',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      enableEditing
      enableRowActions
      muiEditTextFieldProps={{ variant: 'outlined' }}
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EditSelectVariantAlternate = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          editSelectOptions: [
            { label: 'AL', value: 'Alabama' },
            { label: 'AK', value: 'Alaska' },
            { label: 'AS', value: 'American Samoa' },
            { label: 'AZ', value: 'Arizona' },
            { label: 'AR', value: 'Arkansas' },
            { label: 'CA', value: 'California' },
            { label: 'CO', value: 'Colorado' },
            { label: 'CT', value: 'Connecticut' },
            { label: 'DE', value: 'Delaware' },
            { label: 'FL', value: 'Florida' },
            { label: 'GA', value: 'Georgia' },
            { label: 'GU', value: 'Guam' },
            { label: 'HI', value: 'Hawaii' },
            { label: 'ID', value: 'Idaho' },
            { label: 'IL', value: 'Illinois' },
            { label: 'IN', value: 'Indiana' },
            { label: 'IA', value: 'Iowa' },
            { label: 'KS', value: 'Kansas' },
            { label: 'KY', value: 'Kentucky' },
            { label: 'LA', value: 'Louisiana' },
            { label: 'ME', value: 'Maine' },
            { label: 'MD', value: 'Maryland' },
            { label: 'MA', value: 'Massachusetts' },
            { label: 'MI', value: 'Michigan' },
            { label: 'MN', value: 'Minnesota' },
            { label: 'MS', value: 'Mississippi' },
            { label: 'MO', value: 'Missouri' },
            { label: 'MT', value: 'Montana' },
            { label: 'NE', value: 'Nebraska' },
            { label: 'NV', value: 'Nevada' },
            { label: 'NH', value: 'New Hampshire' },
            { label: 'NJ', value: 'New Jersey' },
            { label: 'NM', value: 'New Mexico' },
            { label: 'NY', value: 'New York' },
            { label: 'NC', value: 'North Carolina' },
            { label: 'ND', value: 'North Dakota' },
            { label: 'MP', value: 'Northern Mariana Islands' },
            { label: 'OH', value: 'Ohio' },
            { label: 'OK', value: 'Oklahoma' },
            { label: 'OR', value: 'Oregon' },
            { label: 'PA', value: 'Pennsylvania' },
            { label: 'PR', value: 'Puerto Rico' },
            { label: 'RI', value: 'Rhode Island' },
            { label: 'SC', value: 'South Carolina' },
          ],
          editVariant: 'select',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="row"
      enableEditing
      enableRowActions
      muiEditTextFieldProps={{ variant: 'outlined' }}
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EditingCustomizeInput = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
  };

  const usStates = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
          muiEditTextFieldProps: () => ({
            children: usStates.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            )),
            select: true,
          }),
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      enableEditing
      enableRowActions
      muiEditTextFieldProps={{ variant: 'outlined' }}
      onEditingRowSave={handleSaveRow}
    />
  );
};

// export const EditingWithValidation = () => {
//   const [tableData, setTableData] = useState(data);
//   const [firstNameError, setFirstNameError] = useState<string | boolean>(false);
//   const [lastNameError, setLastNameError] = useState<string | boolean>(false);
//   const [phoneNumberError, setPhoneNumberError] = useState<string | boolean>(
//     false,
//   );

//   const handleSaveRow = ({ row, values }) => {
//     tableData[row.index] = values;
//     setTableData([...tableData]);
//   };

//   const validateFirstName = (value: string) => {
//     if (value.length === 0) return 'First name is required';
//     return false;
//   };

//   const validateLastName = (value: string) => {
//     if (value.length === 0) return 'Last name is required';
//     return false;
//   };

//   const validatePhoneNumber = (value: string) => {
//     if (value.length === 0) return 'Phone number is required';
//     if (!value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/))
//       return 'Invalid phone number';
//     return false;
//   };

//   return (
//     <MaterialReactTable
//       columns={[
//         {
//           header: 'First Name',
//           accessorKey: 'firstName',
//           muiEditTextFieldProps: {
//             error: !!firstNameError,
//             helperText: firstNameError,
//           },
//           onCellEditChange: ({ event }) => {
//             setFirstNameError(validateFirstName(event.target.value));
//           },
//         },
//         {
//           header: 'Last Name',
//           accessorKey: 'lastName',
//           muiEditTextFieldProps: {
//             error: !!lastNameError,
//             helperText: lastNameError,
//           },
//           onCellEditChange: ({ event }) => {
//             setLastNameError(validateLastName(event.target.value));
//           },
//         },
//         {
//           header: 'Phone Number',
//           accessorKey: 'phoneNumber',
//           muiEditTextFieldProps: {
//             error: !!phoneNumberError,
//             helperText: phoneNumberError,
//           },
//           onCellEditChange: ({ event }) => {
//             setPhoneNumberError(validatePhoneNumber(event.target.value));
//           },
//         },
//       ]}
//       data={tableData}
//       enableRowActions
//       enableEditing
//       onEditingRowSave={handleSaveRow}
//     />
//   );
// };

export const EditingEnabledAsync = () => {
  const [tableData, setTableData] = useState(data);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    row,
    values,
  }) => {
    setIsSaving(true);
    setTimeout(() => {
      tableData[row.index] = values;
      setTableData([...tableData]);
      setIsSaving(false);
    }, 1500);
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      enableEditing
      enableRowActions
      onEditingRowSave={handleSaveRow}
      state={{
        showProgressBars: isSaving,
      }}
    />
  );
};

const nestedData = [...Array(10)].map(() => ({
  address: faker.location.streetAddress(),
  name: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
}));

export const EditingNestedData = () => {
  const [tableData, setTableData] = useState(() => nestedData);

  return (
    <MaterialReactTable
      columns={[
        {
          accessorFn: (row) => row.name.firstName,
          header: 'First Name',
          id: 'firstName',
        },
        {
          accessorKey: 'name.lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: false,
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      enableEditing
      onEditingRowSave={({ row, values }) => {
        tableData[row.index] = {
          address: row._valuesCache.address,
          name: {
            firstName: values.firstName,
            lastName: values['name.lastName'],
          },
          phoneNumber: row._valuesCache.phoneNumber,
          state: row._valuesCache.state,
        };
        setTableData([...tableData]);
      }}
    />
  );
};

export const EditingEnabledEditModeTableWithGroupedRows = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: false,
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="table"
      enableEditing
      enableGrouping
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EnableEditingConditionally = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: (row) => row.original.state.includes('N'),
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="row"
      enableEditing={(row) => row.index % 2 === 0}
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EnableEditingConditionallyCell = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: (row) => row.original.state.includes('N'),
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="cell"
      enableEditing={(row) => row.index % 2 === 0}
      onEditingRowSave={handleSaveRow}
    />
  );
};

export const EnableEditingConditionallyTable = () => {
  const [tableData, setTableData] = useState(data);

  const handleSaveRow: MRT_TableOptions<Person>['onEditingRowSave'] = ({
    exitEditingMode,
    row,
    values,
  }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'firstName',
          header: 'First Name',
        },
        {
          accessorKey: 'lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'state',
          header: 'State',
        },
        {
          accessorKey: 'phoneNumber',
          enableEditing: (row) => row.original.state.includes('N'),
          header: 'Phone Number',
        },
      ]}
      data={tableData}
      editDisplayMode="table"
      enableEditing={(row) => row.index % 2 === 0}
      onEditingRowSave={handleSaveRow}
    />
  );
};
