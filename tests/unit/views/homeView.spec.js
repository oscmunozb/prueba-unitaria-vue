import { mount } from "@vue/test-utils"; // Importa el método mount de Vue Test Utils para montar componentes en las pruebas
import { createRouter, createWebHistory } from "vue-router"; // Importa las funciones necesarias para crear el router en Vue

import HomeView from "@/views/HomeView.vue"; // Importa el componente HomeView que será probado

describe("Vista HomeView.vue", () => {
  /**
   * Este test realiza una captura de snapshot de la estructura HTML generada por el
   * componente HomeView. El snapshot compara la salida actual con versiones previas
   * para asegurar que no hayan cambiado de forma inesperada.
   */
  test("Snapshot de la estructura HTML del componente HomeView.vue", async () => {
    // Crear el router para el componente HomeView
    // Esto simula un entorno de enrutamiento para las pruebas
    const router = createRouter({
      history: createWebHistory(), // Define el modo de historial para las rutas (navegación tradicional con URL)
      routes: [{
        path: '/', // Define la ruta raíz para el componente HomeView
        name: 'HomeView', // Asigna un nombre a la ruta
        component: HomeView // Asocia la ruta al componente HomeView
      }],
    });

    // Navega a la ruta inicial ('/') y espera a que el router esté listo
    router.push('/');
    await router.isReady();

    // Montar el componente HomeView usando el router configurado
    // Esto permite que el componente se pruebe en un entorno que imita un contexto real
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router] // Proporciona el router como un plugin global para el componente
      }
    });

    // Realiza la comparación del HTML renderizado por el componente con el snapshot
    // Si no existe un snapshot anterior, Jest generará uno nuevo
    expect(wrapper.html()).toMatchSnapshot();
  });
});
