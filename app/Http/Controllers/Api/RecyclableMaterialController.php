<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RecyclableMaterial;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class RecyclableMaterialController extends Controller
{
    /**
     * @OA\Get(
     *   path="/api/materials",
     *   tags={"Materials"},
     *   summary="View All materials so you can choose on which you will recycle or collect",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function getMaterials()
    {
        $materials = RecyclableMaterial::all();
        return Response::json(['data' => $materials, 'status' => 200], 200);
    }

    /**
     * @OA\Get(
     *   path="/api/mymaterials",
     *   tags={"Materials"},
     *   summary="Get All materials belong to you",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function myMaterials()
    {
        $materials = Auth()->user()->materials()->with('category')->with('stores.history')->get();
        return Response::json(['data' => $materials, 'status' => 200], 200);
    }

    /**
     * @OA\Get(
     *   path="/api/manufacture/choice/materials",
     *   tags={"Materials"},
     *   summary="Get All materials manufactures need",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function manufactureChoice()
    {
        $materials = User::where('ismanufacture',1)->with('materials')->get();
        return Response::json(['data' => $materials, 'status' => 200], 200);
    }


    /**
     * @OA\Get(
     *   path="/api/material/show/{id}",
     *   tags={"Materials"},
     *   summary="Get material details",
     *   security={{"sanctum":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      description="materialId",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function show($id)
    {
        $material= RecyclableMaterial::findOrFail($id);
        return Response::json(['data' => $material, 'status' => 200]);
    }
    /**
     * @OA\Put(
     *   path="/api/material/update/{id}",
     *   tags={"Materials"},
     *   summary="Update material",
     *   security={{"sanctum":{}}},
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      description="materialId",
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     * @OA\RequestBody(
     *  @OA\JsonContent(
     *    type="object", 
     *    @OA\Property(property="name", type="string"),
     *    @OA\Property(property="description", type="string"),
     * 
     * ),
     * ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function update(Request $request, $id)
    {
        $request->validate(['name' => 'required', 'description' => 'required']);
        $material = RecyclableMaterial::findOrFail($id);
        $material->name = $request->input('name');
        $material->description=$request->input('description');
        $material->save();
        return Response::json(['message' => 'updated successfully', 'status'=>201]);
    }

    /**
     * @OA\Post(
     *   path="/api/material/create/{id}",
     *   tags={"Materials"},
     *   summary="what are materials they collect",
     *   security={{"sanctum":{}}},
     *   @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      description="categoryId",
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\RequestBody(
     *  @OA\JsonContent(
     *    type="object", 
     *    @OA\Property(property="name", type="string"),
     *    @OA\Property(property="description", type="string"),
     * 
     * ),
     * ),
     *   @OA\Response(
     *      response=201,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function create(Request $request, $id)
    {
        $request->validate(['name' => 'required', 'description' => 'required']);
        $material = new RecyclableMaterial();
        $material->name = $request->input('name');
        $material->description = $request->input('description');
        $material->category_id = $id;
        $material->save();
        return Response::json(['message' => 'created successfully', 'status' => 201]);
    }

    /**
     * @OA\Delete(
     *   path="/api/material/delete/{id}",
     *   tags={"Materials"},
     *   summary="delete materials",
     *   security={{"sanctum":{}}},
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      ),
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *      description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    public function delete($id)
    {
        $material = RecyclableMaterial::find($id);
        $material->delete();
        return Response::json(['message' => 'deleted successfully'], 200);
    }
}
