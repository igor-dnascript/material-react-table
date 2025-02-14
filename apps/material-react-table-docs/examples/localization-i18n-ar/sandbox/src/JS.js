//Import Material React Table and its Types
import { MaterialReactTable } from 'material-react-table';

//Import Material React Table Translations
import { MRT_Localization_AR } from 'material-react-table/locales/ar';

//mock data
import { data } from './makeData';

const columns = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: 'الاسم الأول',
  },
  {
    accessorKey: 'lastName',
    header: 'اسم العائلة',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'العمر',
  },
  //end
];

const Example = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnResizing
      enableColumnOrdering
      enableEditing
      enableColumnPinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={MRT_Localization_AR}
    />
  );
};

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { arSA } from '@mui/material/locale';

const ExampleWithThemeProvider = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  return (
    //Setting Material UI locale as best practice to result in better accessibility
    <ThemeProvider theme={createTheme({ ...theme, direction: 'rtl' }, arSA)}>
      <div style={{ direction: 'rtl' }}>
        <Example />
      </div>
    </ThemeProvider>
  );
};

export default ExampleWithThemeProvider;
