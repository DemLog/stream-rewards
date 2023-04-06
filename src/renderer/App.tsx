import './App.css';
import { Box, Container, CssBaseline } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import WindowHeader from './components/Window/WindowHeader';
import Header from './components/Header';
import RewardList from './components/Rewards/RewardList/RewardList';
import Layout from './components/Layout';
import SettingsBlockList from './components/Settings/SettingsBlockList/SettingsBlockList';
import TransactionList from './components/Transactions/TransactionList/TransactionList';
import RewardSettings from './components/Rewards/RewardSettings/RewardSettings';
import TransactionsActivity from './components/Transactions/TransactionsActivity/TransactionsActivity';

export default function App() {
  return (
    <CssVarsProvider
      defaultMode='light'
    >
      <CssBaseline />
      <WindowHeader titleWindow='StreamRewards' />
      <Box
        sx={{
          overflow: 'hidden',
          height: 'calc(100vh - 40px)'
        }}
      >
        <Header/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '90vh',
            mt: '8px',
            mx: '4px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexBasis: '80%',
              height: '80%',
              flexGrow: 1,
              my: '4px'
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: '80%',
                mx: '4px',
                overflow: 'scroll',
                height: '100%'
              }}
            >
              <RewardList/>
            </Box>
            <Layout.Block
              title="Настройки награды"
              sx={{
                flexGrow: 1,

                flexBasis: '20%',
              }}
            >
              <RewardSettings/>
            </Layout.Block>
          </Box>
          <Box
            sx={{
              display: 'flex',
              maxHeight: '30%',
              minHeight: '20%',
              my: '4px',
            }}
          >
            <Layout.Block title="История покупок" sx={{
              flexGrow: 1,
              flexBasis: '40%',
            }}>
              <TransactionList/>
            </Layout.Block>
            <Layout.Block title="Активность" sx={{
              flexGrow: 1,
              flexBasis: '40%',
            }}>
              <TransactionsActivity/>
            </Layout.Block>
            <Layout.Block title="Управление" sx={{
              flexGrow: 1,
              flexBasis: '20%',
            }}>
              <SettingsBlockList/>
            </Layout.Block>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
