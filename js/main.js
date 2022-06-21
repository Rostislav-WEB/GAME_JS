const { app, BrowserWindow } = require('electron')
 
// Функция для создания окна приложения
function createWindow () {
  // Создаём окно
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
		contextIsolation: false,
            nodeIntegration: true,
            enableRemoteModule: true


    }
  })
  
  // Вывод файла index.html
  win.loadFile('../index.html')
}
 
// Проверяем инициализацию electron
app.whenReady().then(createWindow)
 
// Проверка события закрытия окна
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
// Отслеживание активации приложения
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})