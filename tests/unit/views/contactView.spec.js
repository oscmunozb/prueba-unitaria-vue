import { mount } from '@vue/test-utils'; // Importa la función mount de Vue Test Utils, utilizada para montar componentes en pruebas unitarias
import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias para crear el enrutador en Vue

import ContactView from '@/views/ContactView.vue'; // Importa el componente ContactView, que será probado

describe('ContactView', () => {
  /**
   * Este test verifica la existencia del componente ContactView cuando la ruta
   * asociada a este componente está activa. Garantiza que el componente se monte
   * correctamente y está presente en el DOM.
   */
  test('Probando la existencia del componente o vista ContactView', async () => {
    
    // Crear un router simulado para el componente ContactView
    // Esto es necesario para probar el componente dentro del contexto de Vue Router
    const router = createRouter({
      history: createWebHistory(), // Define el historial de navegación con la API de historial web
      routes: [{
        path: '/contact', // Define la ruta '/contact' que está asociada al componente ContactView
        name: 'ContactViewVue', // Asigna un nombre a la ruta
        component: ContactView // Especifica el componente ContactView para esta ruta
      }],
    });

    // Navega a la ruta '/contact' y espera a que el router esté listo antes de realizar el test
    router.push('/contact');
    await router.isReady();

    // Monta el componente ContactView utilizando el router configurado
    // Esto simula la presencia del componente en un entorno real de enrutamiento
    const wrapper = mount(ContactView, {
      global: {
        plugins: [router] // Proporciona el router como un plugin global para que el componente pueda acceder a él
      }
    });

    // Verifica que el componente ContactView esté presente en el DOM
    // Utiliza el método findComponent para buscar el componente montado y asegura que existe
    expect(wrapper.findComponent(ContactView).exists()).toBe(true);
  });
});
