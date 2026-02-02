<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppsController extends Controller
{
 public function inbox()
    {
        return Inertia::render('apps/email/inbox/index');
    }

    public function inboxDetails($id)
    {
        return Inertia::render('apps/email/inbox/[inboxId]/index', ['id' => $id]);
    }

    public function emailCompose()
    {
        return Inertia::render('apps/email/email-compose/index');
    }

      public function fileManager()
    {
        return Inertia::render('apps/file-manager/index');
    }

    public function chat()
    {
        return Inertia::render('apps/chat/index');
    }

    public function calendar()
    {
        return Inertia::render('apps/calendar/index');
    }

      public function invoices()
    {
        return Inertia::render('apps/invoice/invoices/index');
    }

    public function invoiceDetails($id)
    {
        return Inertia::render('apps/invoice/invoices/[invoiceId]/index', ['id' => $id]);
    }

    public function addInvoice()
    {
        return Inertia::render('apps/invoice/add-invoice/index');
    }

     // Users
    public function contacts()
    {
        return Inertia::render('apps/users/contacts/index');
    }

    public function roles()
    {
        return Inertia::render('apps/users/roles/index');
    }

    public function permissions()
    {
        return Inertia::render('apps/users/permissions/index');
    }

    // Projects
    public function myProjects()
    {
        return Inertia::render('apps/projects/projects/index');
    }

    public function projectsList()
    {
        return Inertia::render('apps/projects/projects-list/index');
    }

    public function projectDetails($id)
    {
        return Inertia::render('apps/projects/projects/[id]/index', ['id' => $id]);
    }

    public function kanbanBoard()
    {
        return Inertia::render('apps/projects/kanban-board/index');
    }

    public function teamBoard()
    {
        return Inertia::render('apps/projects/team-board/index');
    }

    public function activityStream()
    {
        return Inertia::render('apps/projects/activity-stream/index');
    }


}
